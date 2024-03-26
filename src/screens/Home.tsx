import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, PermissionsAndroid } from "react-native";
import { HomeProps } from '../types/types';
import Styles from '../styles/Styles';
import { useEffect } from 'react';
import notifee, { Notification, NotificationAndroid } from '@notifee/react-native';
import firestore from '@react-native-firebase/firestore';
import UsersTable from '../components/users-table';


function Home({ navigation } : HomeProps) {
	const ref = firestore().collection('AccountInfo');
	const [users, setUsers] = useState();

	useEffect(() => {
		return (ref.onSnapshot(querySnapshot => {
			const list = [];
			querySnapshot.forEach(doc => {
			  const { name, email, device_token } = doc._data;
			  list.push({
				name: name,
                email: email,
                device_token: device_token,
              });
			  console.log("name, email, device_token ::::: ", `${name}, ${email}, ${device_token}`);
			  });
			  setUsers(list);
			  
			}));
		}, []);

    return (
		<View>
			<View style={Styles.container}>
				<Text style={Styles.title}>Home</Text>
			</View>
			<UsersTable/>
		</View>
	);
}


export default Home
