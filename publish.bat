cls
echo off
cls
git checkout master
git pull
cd angular-src/assistant
npm run deploy
cd ../..
pause
