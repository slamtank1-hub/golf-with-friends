@echo off
setlocal

set "PROJECT_DIR=%~dp0"
cd /d "%PROJECT_DIR%"
start "golf-with-friends" cmd.exe /k "cd /d "%PROJECT_DIR%""
