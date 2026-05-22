param(
  [string]$CommitMessage = "Update golf trip app data and assets",
  [switch]$DryRun,
  [switch]$NoPush
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Run-Git {
  param([string[]]$GitArgs)
  & git @GitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "git $($GitArgs -join ' ') failed with exit code $LASTEXITCODE"
  }
}

function Find-Node {
  $candidates = @(
    (Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"),
    "node"
  )

  foreach ($candidate in $candidates) {
    if ($candidate -eq "node") {
      $cmd = Get-Command node -ErrorAction SilentlyContinue
      if ($cmd) { return $cmd.Source }
    } elseif (Test-Path -LiteralPath $candidate) {
      return $candidate
    }
  }

  return $null
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

if (-not (Test-Path -LiteralPath ".git")) {
  throw "This folder is not a Git repository: $repoRoot"
}

$origin = (& git remote get-url origin 2>$null)
if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($origin)) {
  throw "Git remote 'origin' is not configured. Add it first, then rerun this script."
}

Write-Host "Repository: $repoRoot"
Write-Host "Remote: $origin"
Write-Host ""
Write-Host "Checking JavaScript syntax..."

$nodePath = Find-Node
if ($nodePath) {
  $jsFiles = @("app.js")
  $jsFiles += Get-ChildItem -LiteralPath "data" -Recurse -Filter "*.js" | ForEach-Object { $_.FullName }

  foreach ($jsFile in $jsFiles) {
    if (Test-Path -LiteralPath $jsFile) {
      Write-Host " - $jsFile"
      & $nodePath --check $jsFile
      if ($LASTEXITCODE -ne 0) { throw "JavaScript syntax check failed: $jsFile" }
    }
  }
} else {
  Write-Host "Node.js was not found; skipping syntax check."
}

$stageTargets = @(
  "app.js",
  "index.html",
  "data/groups",
  "data/venues",
  "assets/oakvalley",
  "assets/century21",
  "docs",
  "scripts/publish-to-github.ps1"
)

$existingTargets = @($stageTargets | Where-Object { Test-Path -LiteralPath $_ })
if ($existingTargets.Count -eq 0) {
  throw "No stage targets were found. Check the repository layout."
}

Write-Host ""
Write-Host "Staging targets:"
$existingTargets | ForEach-Object { Write-Host " - $_" }

if ($DryRun) {
  Write-Host ""
  Write-Host "Dry run only. No commit or push will be made. Current status:"
  git -c core.quotepath=false status --short
  exit 0
}

Run-Git (@("add", "--") + $existingTargets)

# Local server logs are generated while testing and should not be published.
$logFiles = @(
  "server-8765.err.log",
  "server-8765.out.log",
  "server.err.txt",
  "server.out.txt"
)
$existingLogs = @($logFiles | Where-Object { Test-Path -LiteralPath $_ })
if ($existingLogs.Count -gt 0) {
  & git reset -- @existingLogs | Out-Null
}

Write-Host ""
Write-Host "Staged files:"
$staged = @(& git -c core.quotepath=false diff --cached --name-only)
if ($staged.Count -eq 0 -or [string]::IsNullOrWhiteSpace(($staged -join ""))) {
  Write-Host "Nothing staged. No commit needed."
  exit 0
}
$staged | ForEach-Object { Write-Host " - $_" }

Run-Git @("commit", "-m", $CommitMessage)

if ($NoPush) {
  Write-Host ""
  Write-Host "Commit created. Push skipped because -NoPush was used."
  exit 0
}

$branch = (& git branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($branch)) {
  throw "Could not determine current Git branch."
}

Run-Git @("push", "-u", "origin", $branch)

Write-Host ""
Write-Host "Done. Changes were pushed to origin/$branch."