/**
 * @format
 */
import './src/utils/logger';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./src/config/Reactotron.config').then(() =>
    console.log('Reactotron Configured'),
  );
}

AppRegistry.registerComponent(appName, () => App);
