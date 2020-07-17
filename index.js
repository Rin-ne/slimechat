import { registerRootComponent } from 'expo';
import { AppRegistry, Vibration } from 'react-native'
import ListenerTask from './task/listener'
import messaging from '@react-native-firebase/messaging'
import PushNotification from 'react-native-push-notification'


import App from './App';
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    const body = remoteMessage.notification.body
    const msg = body.length > 20? body.substr(0, 20) : body
    PushNotification.localNotification({
      autoCancel: true,
      bigText:body,
      subText: 'Local Notification Demo',
      title: remoteMessage.notification.title,
      message: msg,
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default'
    })
    Vibration.vibrate([0, 400, 100, 400])
  });
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
AppRegistry.registerHeadlessTask("listener", ListenerTask)
registerRootComponent(App);

