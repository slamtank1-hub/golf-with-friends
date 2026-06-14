# Publish Guide

Run this from the project folder when you want to publish the current app data and assets to GitHub.

```powershell
.\publish-to-github.bat
```

Useful options:

```powershell
.\publish-to-github.bat -DryRun
.\publish-to-github.bat -NoPush
.\publish-to-github.bat -CommitMessage "Update Kwon Family Hwasung Sangnok data"
```

The script checks JavaScript syntax, stages app/data/docs/assets, commits the changes, and pushes the current branch to `origin`.

This project publishes to `slamtank1-hub/golf-with-friends`. If Git does not have a local author configured, the script uses:

```text
slamtank1-hub <slamtank1-hub@users.noreply.github.com>
```
