import { AppRegistry } from 'react-native';
import App from './src/App/';
// app.js default in root dir is not used instead using new App.js inside /src/

AppRegistry.registerComponent('auth', () => App);
