import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, PermissionsAndroid } from "react-native";
import { HomeProps } from '../types/types';
import Styles from '../styles/Styles';
import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee, { Notification, NotificationAndroid } from '@notifee/react-native';


function Home({ navigation } : HomeProps) {
  useEffect(() => {
		getFcmToken();
		return () => {
		};
	}, []);

  const getFcmToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
		const fcmToken = await messaging().getToken();
		console.log('[+] FCM Token :: ', fcmToken);
	};

    return <View style={Styles.container}>
        <Text style={Styles.title}>Home</Text>
        </View>
}


export default Home
