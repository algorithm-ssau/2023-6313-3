$CurrentDirectory = Get-Location #Run it from ..\2023-6313-3\server\Business logic service
Write-Output $CurrentDirectory
Set-Location './Auto.Ru/Auto.Ru.Web'
$CurrentDirectory = Get-Location
Write-Output $CurrentDirectory

npm install sequelize-cli sequelize-auto-migrations --save
node './node_modules/sequelize-auto-migrations/bin/makemigration.js' --name add-user-role

Set-Location '../../'
$CurrentDirectory = Get-Location
Write-Output $CurrentDirectory
