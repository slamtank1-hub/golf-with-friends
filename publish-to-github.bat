@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "PUBLISH_SCRIPT=%SCRIPT_DIR%scripts\publish-to-github.ps1"

if not exist "%PUBLISH_SCRIPT%" (
  echo Cannot find "%PUBLISH_SCRIPT%".
  exit /b 1
)

pushd "%SCRIPT_DIR%"
if errorlevel 1 (
  echo Cannot enter project folder: "%SCRIPT_DIR%"
  exit /b 1
)

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%PUBLISH_SCRIPT%" %*
set "EXIT_CODE=%ERRORLEVEL%"

popd
exit /b %EXIT_CODE%
