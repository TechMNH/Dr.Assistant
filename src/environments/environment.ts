// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAPq5bNLMQnODJYfCAOfnFvsNa8_ZznYpE",
    authDomain: "localhost:4200",
    databaseURL: "https://drassistant-5c854.firebaseio.com",
    projectId: "drassistant-5c854",
    storageBucket: "drassistant-5c854.appspot.com",
    messagingSenderId: "683207221437",
    appId: "1:683207221437:web:afefb3ccecb47609e857d4",
    measurementId: "G-2S594WL943"
  },
  DB: {
    'drassistant-5c854': '1jF7wuXhqzSJ7l93ZteC5LUPVQfHXzAUHchfR84e'
  },
  defaultLogLevel: 'error'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
