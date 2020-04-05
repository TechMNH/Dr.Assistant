cls
echo off
cls
echo This is to Setup Dr. Assistant in your local
start cmd /k "npm install -g @angular/cli@~9.1.0 && exit"
echo Project Dependencies Installation Initiated...
start cmd /k "cd angular-src/assistant && npm i && exit"
rem echo Build Script Dependencies Installation Initiated...
rem start /min cmd /k "cd build && npm i && exit"
pause