@echo off
reg add "HKEY_CURRENT_USER\Software\Google\Chrome\NativeMessagingHosts\CidiaWebsiteDump_companion" /ve /t REG_SZ /d "%~dp0\CidiaWebsiteDump_companion.json" /f