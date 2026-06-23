Set-Location -LiteralPath $PSScriptRoot
Start-Process "http://127.0.0.1:4173"
node .\serve-local.js
