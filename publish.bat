cls
echo off
cls
git reset --hard
git fetch origin --prune
git checkout master
git pull
cd angular-src/assistant
call npm run build || call npm i && npm run build
call npm run deploy
cd ../.. && pause
