import React, {useEffect} from 'react';
import Providers from './navigation/Main';
import SplashScreen from 'react-native-splash-screen';
import {fcmService} from './services/FCMServices';
import {Alert} from 'react-native';
import {localNotificationService} from './services/LocalNotificationService';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log('[App] onRegister:', token);
    }

    function onNotification(notify) {
      console.log('[App] onNotification ', notify);
      const options = {
        soundname: 'default',
        playSound: true,
        smallIcon: 'android/app/src/main/res/mipmap-hdpi/lifeskills.png',
        largeIcon: 'android/app/src/main/res/mipmap-mdpi/lifeskills.png',
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
      );
    }

    function onOpenNotification(notify) {
      console.log('[App] onOpenNotificationsHere: ', notify);
      //Alert.alert('Open Notifications: ' + notify.body);
    }

    return () => {
      console.log('[App] unregister');
      fcmService.unregister();
      localNotificationService.unregister();
    };
  }, []);
  return <Providers />;
};
export default App;
