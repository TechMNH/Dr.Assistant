cls
echo off
cls
git fetch origin --prune
git checkout master
git pull
cd angular-src/assistant
npm run build && npm run deploy || npm i && npm run build && npm run deploy || cd ../..
cd ../..
pause
