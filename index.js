/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

AppRegistry.registerComponent(appName, () => App);

/*const db = firestore();

// set the host property to connect to the emulator
// set these before any read/write operations occur to ensure it doesn't affect your Cloud Firestore data!
db.settings({host: 'localhost:8080', ssl: false});
*/
