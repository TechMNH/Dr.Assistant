export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAPq5bNLMQnODJYfCAOfnFvsNa8_ZznYpE",
    authDomain: "dr-assistant-web.web.app",
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
  logger: {
    serverLogUrl: 'http://localhost:4200/log',
    localLogLevel: 5, // error
    serverLogLevel: 5, // error
    disableConsoleLogging: true
  }
};
