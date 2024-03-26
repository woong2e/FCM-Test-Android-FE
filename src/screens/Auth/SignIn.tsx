import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native"
// import Login from '../../components/Login';
import type { SignInProps } from '../../types/types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Styles from '../../styles/Styles';
import { setLoggedIn } from '../../store/loginSuccessSlice';
import GoogleSignIn from '../../components/GoogleSignIn';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { signIn } from './auth';
import messaging from '@react-native-firebase/messaging';

function SignIn({ navigation } : SignInProps) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const dispatch = useAppDispatch();
  // const isLogin = useAppSelector((state) => state.isLogin);

  // useEffect(() => {
  //     isLogin.isLogin ? navigation.navigate('Home') : navigation.navigate('SignIn');
	// }, [isLogin.isLogin]);

  const signInSubmit = async () => { // 로그인 함수
    const {email, password} = form;
    const info = {email, password};

    try {
      const {user} = await signIn(info);
      console.log("[+] user :: ", user);
      const usersCollection  = firestore().collection("AccountInfo").doc(`${user.email}`);
      if (await usersCollection.get()) {
        const deviceToken = await getFcmToken();
        firestore().collection('AccountInfo').doc(`${user.email}`)
        .update({
          device_token: deviceToken,
          token_created_at: Date.now(),
        })
        .then(() => {
          console.log('User updated!');
        });
      }
    navigation.navigate('Home');
    } catch (e) {
      console.log(e);
      Alert.alert("로그인에 실패하였습니다.");
    }
  }

  const getFcmToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
		const fcmToken = await messaging().getToken();
		console.log('[+] FCM Token :: ', fcmToken);
		return fcmToken;
	};

    return (
        <View style={{flex: 1}}>
            <Text style={{ textAlign: "center", fontSize: 50 }}>Sign In</Text>
            <View>
      <View style={{alignItems: 'stretch'}}>
        <TextInput
          placeholder="email"
          style={Styles.input}
          autoCapitalize="none"
          onChangeText={(email) => {setForm((prevState) => {
            return { ...prevState, email: email }
          })}}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Password"
          style={Styles.input}
          autoCapitalize="none"
          onChangeText={(password) => {setForm((prevState) => {
            return { ...prevState, password: password }
          })}}
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
        <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          try {
            signInSubmit();
          } catch (error) {
            console.log(error);
          }
        }}
        >
        <Text style={Styles.buttonText}>로그인</Text>
        </TouchableOpacity>
    </View>    
    <Text>--------------------</Text>
    <GoogleSignIn/>
        </View>
    );
}

export default SignIn 