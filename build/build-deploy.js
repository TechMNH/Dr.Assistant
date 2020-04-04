const path = require('path');
const exec = require('child_process').exec;
const copy = require('copy-dir');

console.log('Build Deploy Process Initiated...');
const dirname = path.join(__dirname, '../');
const angularSource = path.join(dirname, 'Angular');
const cordovaSource = path.join(dirname, 'Cordova');
const firebaseSource = path.join(dirname, 'Firebase', 'public');
const apkSource = path.join(cordovaSource, 'platforms', 'android', 'app', 'build', 'outputs', 'apk', 'debug');

const angularBuildCommand = 'cd ' + angularSource + ' && ng build';
const cordovaBuildCommand = 'cd ' + cordovaSource + ' && cordova build';
const firebaseBuildCommand = 'cd ' + path.join(firebaseSource, '../') + ' && firebase deploy';
const gitPushCommand = 'cd ' + dirname + ' && git add . && git commit -m "expense app" && git push';

const appDestination = path.join(dirname, 'App');

exec(angularBuildCommand, err => {
    if (!err) {
        console.log('Angular Build Complete');
        copy.sync(path.join(angularSource, 'dist'), path.join(cordovaSource));
        copy.sync(path.join(angularSource, 'dist', 'www'), path.join(firebaseSource));
        exec(cordovaBuildCommand, err => {
            if (!err) {
                console.log('Cordova APK Build Complete');
                exec(firebaseBuildCommand, err => {
                    if (!err) {
                        console.log('Firebase Deploy Complete');
                        copy.sync(apkSource, appDestination);
                        exec(gitPushCommand, err => {
                            if (!err)
                                console.log("Git Push Successfull");
                            else
                                console.log('Git Push Error: ', err);
                        });
                    } else
                        console.log('Firebase Deploy Error: ', err);
                });
            } else
                console.log('Cordova APK Build Error: ', err);
        });
    } else
        console.log('Angular Build Error: ', err);
});
