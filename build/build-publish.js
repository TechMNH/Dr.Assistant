const path = require('path');
const exec = require('child_process').exec;
const copy = require('copy-dir');

const dirname = path.join(__dirname, '../', '../');
const angularSource = path.join(dirname, 'angular-src', 'assistant');
const angularSourceDist = path.join(dirname, 'angular-src', 'assistant', 'dist');
const deployPath = path.join(dirname, 'deployed-site');
const buildCommand = 'npm run build';
const changeDir = (src) => { return 'cd ' + src };

console.log('Publishing to GitHub Pages...');

exec(changeDir(angularSource) + ' && ' + buildCommand, (err) => {
    if (err)
        console.log('Error Occured in Angular Build: ', err);
    else {
        console.log('Angular Build Successful !!!');
        copy.sync(angularSourceDist, deployPath);
        console.log('Dist Folder Coped Successfully !!!');
    }
});