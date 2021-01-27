import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import database from '@react-native-firebase/database';
import {Platform} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Title} from 'react-native-paper';
import {Alert} from 'react-native';

let userToken;

class LocalNotificationService {
  configure = (onOpenNotification) => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[LocalNotification] onRegister:', token);
        userToken = token;
        /*database()
          .ref('users/' + auth().currentUser.uid + '/userToken')
          .set({
            token: token,
          })
          .catch(function (error) {
            console.log(error);
            Alert.alert('Something went wrong, Please try again.');
          });*/
      },
      onNotification: function (notification) {
        console.log('[LocalNotification] onNotification', notification);
        if (!notification?.data) {
          return;
        }
        notification.userInteraction = true;
        onOpenNotification(
          Platform.OS == 'ios' ? notification.data.item : notification.data,
        );
        if (Platform.OS == 'ios') {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      },
      permission: {
        alert: true,
        badge: true,
        sound: true,
      },
      popIntialNotification: true,
      requestPermission: true,
    });
  };

  unregister = () => {
    PushNotification.unregister();
  };

  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.LocalNotificationService({
      ...this.buildAndroidNotification(id, title, message, data, options),
      ...this.buildIOSNotification(id, title, message, data, options),
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
    });
  };

  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_notification',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || true,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };

  buildIOSNotification = (id, title, message, data = {}, options = {}) => {
    return {
      alertAction: options.alertAction || 'view',
      category: options.category || '',
      userInfo: {
        id: id,
        item: data,
      },
    };
  };

  cancelAllLocalNotifications = () => {
    if (Platform.OS == 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  removeAllDeliveredNotificationsByID = (notificationId) => {
    console.log(
      '[LocalNotificationService] removeDeliveredNOtificationByID: ',
      notificationId,
    );
    PushNotification.cancelLocalNotifications({id: '&(notificationId)'});
  };
}
export const localNotificationService = new LocalNotificationService();
export {userToken};
