import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { HomeProps } from '../types/types';
import Styles from '../styles/Styles';
import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';


function Home({ navigation } : HomeProps) {
  useEffect(() => {
		getFcmToken();
		subscribe();
		return () => {
			subscribe()
		};
	}, []);

  const getFcmToken = async () => {
		const fcmToken = await messaging().getToken();
		console.log('[+] FCM Token :: ', fcmToken);
	};

  const subscribe = messaging().onMessage(async remoteMessage => {
		console.log('[+] Remote Message ', JSON.stringify(remoteMessage));
	});

    return <View style={Styles.container}>
        <Text style={Styles.title}>Home</Text>
        {/* <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={Styles.buttonText}>Sign In</Text>
        </TouchableOpacity> */}
        </View>
}


export default Home
