/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const ProvidedNavigator = () => {
    return (
      <ThemeProvider theme={{...theme}}>
        <App />
      </ThemeProvider>
    );
  };

function onMessageReceived(message) {
  console.log('messageType: ', message.type);
  console.log('onBackgroundMessageNotification', message.notification);
  
  if (message.notification === undefined) {
    return;
  }
  return () => {
    // 알림 채널 생성
    const channelId = notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    });
    // 디바이스에 알림 표시
    const { type, timestamp } = message;
    if (type === 'order_shipped') {
      notifee.displayNotification({
        title: message.notification.title,
        body: message.notification.body,
        android: {
            channelId: channelId,
        },
      });
    }
  }
}

// messaging().onMessage(onMessageReceived);
// messaging().setBackgroundMessageHandler(onMessageReceived);

messaging().setBackgroundMessageHandler(async (message) => {
  try {
    // 메시지 처리 작업 수행
    const result = onMessageReceived(message);
    // 처리 완료 후 반환
    return result;
  } catch (error) {
    // 오류 처리
    console.error('Error occurred:', error);
    throw error;
  }
});

AppRegistry.registerComponent(appName, () => ProvidedNavigator);
