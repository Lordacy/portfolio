@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo   ========================================
echo    Portfolio  本地服务启动中...
echo   ========================================
echo.
echo   启动后请在浏览器打开：
echo.
echo       http://localhost:8770
echo.
echo   关闭此窗口即可停止服务。
echo.
start "" "http://localhost:8770"
python -m http.server 8770 --bind 127.0.0.1
pause
