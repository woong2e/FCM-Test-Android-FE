import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import Styles from '../../styles/Styles';
import { signUp } from './auth';
import type { SignUpProps } from '../../types/types';
import firestore from '@react-native-firebase/firestore';

function SignUp({ navigation } : SignUpProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUpSubmit = async () => { // 회원가입 함수
    const {name, email, password} = form;
    console.log(name, email, password);
    const info = {email, password};
    try {
      console.log(info);
      const {user} = await signUp(info);
      console.log(user);
      firestore()
      .collection('AccountInfo')
      .doc(`${user.email}`)
      .set({
        name: name,
        email: user.email,
        device_token:"",
        token_created_at: "",
      })
      .then(() => {
        console.log('User added!');
      });

      navigation.navigate('Welcome');
    } catch (e) {
      Alert.alert("회원가입에 실패하였습니다.");
    }
  }


  return (
    <View style={{flex: 1}}>
      <Text 
        style={{ textAlign: "center", fontSize: 50 }}>Sign In
      </Text>
      <View>
        <View style={{alignItems: 'stretch'}}>
        <TextInput
          placeholder="name"
          style={Styles.input}
          autoCapitalize="none"
          onChangeText={(name) => {setForm((prevState) => {
          return { ...prevState, name: name }
          })}}
          autoCorrect={false}
        />
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
        <TextInput
          placeholder="confirmPassword"
          style={Styles.input}
          autoCapitalize="none"
          onChangeText={(confirmPassword) => {setForm((prevState) => {
          return { ...prevState, confirmPassword: confirmPassword }
          })}}
          autoCorrect={false}
          secureTextEntry={true}
        />
        </View>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => {
          try {
            signUpSubmit();
          } catch (error) {
          console.log(error);
          }
          // navigation.navigate('Home');
          }}>
        <Text 
          style={Styles.buttonText}>회원가입
        </Text>
        </TouchableOpacity>
      </View>    
    </View>
  );
}

export default SignUp