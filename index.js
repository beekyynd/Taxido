/**
 * @format
 */

import { registerRootComponent } from 'expo';
import App from './App';
import messaging from '@react-native-firebase/messaging';

// Set background message handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  // Not a Responsys Push, your app should handle this notification
});

// Register the root component with Expo
registerRootComponent(App);
