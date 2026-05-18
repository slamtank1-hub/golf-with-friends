param(
  [string]$CommitMessage = "Update Oak Valley trip UI and images",
  [switch]$DryRun
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

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

if (-not (Test-Path ".git")) {
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

$nodeCandidates = @(
  (Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"),
  "node"
)
$nodePath = $null
foreach ($candidate in $nodeCandidates) {
  if ($candidate -eq "node") {
    $cmd = Get-Command node -ErrorAction SilentlyContinue
    if ($cmd) { $nodePath = $cmd.Source; break }
  } elseif (Test-Path -LiteralPath $candidate) {
    $nodePath = $candidate
    break
  }
}

if ($nodePath) {
  & $nodePath --check app.js
  if ($LASTEXITCODE -ne 0) { throw "app.js syntax check failed" }
  & $nodePath --check data/venues/oakvalley.js
  if ($LASTEXITCODE -ne 0) { throw "oakvalley.js syntax check failed" }
} else {
  Write-Host "Node.js was not found; skipping syntax check."
}

$paths = @(
  "app.js",
  "index.html",
  "data/groups/kimjang-bond.js",
  "data/groups/kimjan-bond_titie.png",
  "data/venues/oakvalley.js",
  "scripts/publish-to-github.ps1",
  "assets/oakvalley/fine/pinesummary_hole1.png",
  "assets/oakvalley/fine/pinesummary_hole2.png",
  "assets/oakvalley/fine/pinesummary_hole3.png",
  "assets/oakvalley/fine/pinesummary_hole4.png",
  "assets/oakvalley/fine/pinesummary_hole5.png",
  "assets/oakvalley/fine/pinesummary_hole6.png",
  "assets/oakvalley/fine/pinesummary_hole7.png",
  "assets/oakvalley/fine/pinesummary_hole8.png",
  "assets/oakvalley/fine/pinesummary_hole9.png",
  "assets/oakvalley/maple/maplesummary_hole1.png",
  "assets/oakvalley/maple/maplesummary_hole2.png",
  "assets/oakvalley/maple/maplesummary_hole3.png",
  "assets/oakvalley/maple/maplesummary_hole4.png",
  "assets/oakvalley/maple/maplesummary_hole5.png",
  "assets/oakvalley/maple/maplesummary_hole6.png",
  "assets/oakvalley/maple/maplesummary_hole7.png",
  "assets/oakvalley/maple/maplesummary_hole8.png",
  "assets/oakvalley/maple/maplesummary_hole9.png",
  "assets/oakvalley/cherry/cherrysummary_hole1.png",
  "assets/oakvalley/cherry/cherrysummary_hole2.png",
  "assets/oakvalley/cherry/cherrysummary_hole3.png",
  "assets/oakvalley/cherry/cherrysummary_hole4.png",
  "assets/oakvalley/cherry/cherrysummary_hole5.png",
  "assets/oakvalley/cherry/cherrysummary_hole6.png",
  "assets/oakvalley/cherry/cherrysummary_hole7.png",
  "assets/oakvalley/cherry/cherrysummary_hole8.png",
  "assets/oakvalley/cherry/cherrysummary_hole9.png"
)

$missing = @($paths | Where-Object { -not (Test-Path -LiteralPath $_) })
if ($missing.Count -gt 0) {
  throw "These expected files are missing:`n$($missing -join "`n")"
}

Write-Host ""
Write-Host "Files to stage:"
$paths | ForEach-Object { Write-Host " - $_" }

if ($DryRun) {
  Write-Host ""
  Write-Host "Dry run only. No commit or push was made."
  git status --short
  exit 0
}

$gitAddArgs = @("add", "--") + $paths
Run-Git $gitAddArgs

$staged = (& git diff --cached --name-only)
if ([string]::IsNullOrWhiteSpace(($staged -join ""))) {
  Write-Host "Nothing staged. No commit needed."
  exit 0
}

Write-Host ""
Write-Host "Staged files:"
$staged | ForEach-Object { Write-Host " - $_" }

Run-Git @("commit", "-m", $CommitMessage)

$branch = (& git branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($branch)) {
  throw "Could not determine current Git branch."
}

Run-Git @("push", "-u", "origin", $branch)

Write-Host ""
Write-Host "Done. Changes were pushed to origin/$branch."





