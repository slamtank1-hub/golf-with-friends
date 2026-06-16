param(
  [string]$CommitMessage = "Update golf trip app data and assets",
  [string]$GitUserName,
  [string]$GitUserEmail,
  [switch]$DryRun,
  [switch]$NoPush
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$ExpectedRepository = "slamtank1-hub/golf-with-friends"

function Run-Git {
  param([string[]]$GitArgs)
  & git @script:GitCommonArgs @GitArgs
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

function Get-GitHubOwnerFromRemote {
  param([string]$RemoteUrl)

  if ($RemoteUrl -match "github\.com[:/](?<owner>[^/]+)/") {
    return $Matches.owner
  }

  return $null
}

function Ensure-GitIdentity {
  param([string]$OriginUrl)

  $currentName = (& git @script:GitCommonArgs config --get user.name 2>$null)
  $currentEmail = (& git @script:GitCommonArgs config --get user.email 2>$null)

  if (-not [string]::IsNullOrWhiteSpace($currentName) -and -not [string]::IsNullOrWhiteSpace($currentEmail)) {
    Write-Host "Git author: $currentName <$currentEmail>"
    return
  }

  $owner = Get-GitHubOwnerFromRemote -RemoteUrl $OriginUrl
  if ([string]::IsNullOrWhiteSpace($GitUserName)) {
    $GitUserName = if ($owner) { $owner } else { $env:USERNAME }
  }
  if ([string]::IsNullOrWhiteSpace($GitUserEmail)) {
    $GitUserEmail = if ($owner) { "$owner@users.noreply.github.com" } else { "$env:USERNAME@users.noreply.github.com" }
  }

  $script:GitCommonArgs += @("-c", "user.name=$GitUserName", "-c", "user.email=$GitUserEmail")
  Write-Host "Git author for this run: $GitUserName <$GitUserEmail>"
}

function Assert-ExpectedRemote {
  param([string]$OriginUrl)

  if ($OriginUrl -notmatch "github\.com[:/]slamtank1-hub/golf-with-friends(\.git)?$") {
    throw "Git remote 'origin' must point to $ExpectedRepository, but is currently: $OriginUrl"
  }
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot
$script:GitCommonArgs = @("-c", "safe.directory=$repoRoot")

if (-not (Test-Path -LiteralPath ".git")) {
  throw "This folder is not a Git repository: $repoRoot"
}

$origin = (& git @script:GitCommonArgs remote get-url origin 2>$null)
if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($origin)) {
  throw "Git remote 'origin' is not configured. Add it first, then rerun this script."
}
Assert-ExpectedRemote -OriginUrl $origin

Write-Host "Repository: $repoRoot"
Write-Host "Remote: $origin"
Ensure-GitIdentity -OriginUrl $origin
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
  ".gitignore",
  "app.js",
  "index.html",
  "kwon-family-hwasung-sangnok.html",
  "doseoban-century21.html",
  "data/groups",
  "data/venues",
  "assets/oakvalley",
  "assets/century21",
  "assets/hwasung-sangnok",
  "docs",
  "open-project-folder.bat",
  "publish-to-github.bat",
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
  git @script:GitCommonArgs -c core.quotepath=false status --short
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
  & git @script:GitCommonArgs reset -- @existingLogs | Out-Null
}

Write-Host ""
Write-Host "Staged files:"
$staged = @(& git @script:GitCommonArgs -c core.quotepath=false diff --cached --name-only)
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

$branch = (& git @script:GitCommonArgs branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($branch)) {
  throw "Could not determine current Git branch."
}

Run-Git @("push", "-u", "origin", $branch)

Write-Host ""
Write-Host "Done. Changes were pushed to origin/$branch."
