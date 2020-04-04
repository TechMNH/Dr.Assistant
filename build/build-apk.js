const path = require('path');
const exec = require('child_process').exec;
const copy = require('copy-dir');

console.log('Build APK Process Initiated...');
const dirname = path.join(__dirname, '../');
const angularSource = path.join(dirname, 'Angular');
const cordovaSource = path.join(dirname, 'Cordova');
const apkSource = path.join(cordovaSource, 'platforms', 'android', 'app', 'build', 'outputs', 'apk', 'debug');

const angularBuildCommand = 'cd ' + angularSource + ' && ng build';
const cordovaBuildCommand = 'cd ' + cordovaSource + ' && cordova build';

// const appDestination = path.join(dirname, 'App');
const appDestination = path.join('C:/Users/talk2/Dropbox/Books', 'App');

exec(angularBuildCommand, err => {
    if (!err) {
        console.log('Angular Build Complete');
        copy.sync(path.join(angularSource, 'dist'), path.join(cordovaSource));
        exec(cordovaBuildCommand, err => {
            if (!err) {
                copy.sync(apkSource, appDestination);
                console.log('Cordova APK Build Complete');
            } else
                console.log('Cordova APK Build Error: ', err);
        });
    } else
        console.log('Angular Build Error: ', err);
});
