import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from "react-native"
// import Login from '../../components/Login';
import type { SignInProps } from '../../types/types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Styles from '../../styles/Styles';
import { setIsLogin } from '../../store/loginSuccessSlice';


function SignIn({ navigation } : SignInProps) {
    console.log("SignIn");
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');

    const dispatch = useAppDispatch();    
    const isLogin = useAppSelector((state) => state.isLogin);

    return (
        <View style={{flex: 1}}>
            <Text style={{ textAlign: "center", fontSize: 50 }}>Sign In</Text>
            <View>
      <View style={{alignItems: 'stretch'}}>
        <TextInput
          placeholder="ID"
          style={Styles.input}
          autoCapitalize="none"
          value={ID}
          onChangeText={(id) => setID(id)}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Password"
          style={Styles.input}
          autoCapitalize="none"
          value={PW}
          onChangeText={(pw) => setPW(pw)}
          autoCorrect={false}
        />
      </View>
        <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={Styles.buttonText}>로그인</Text>
        </TouchableOpacity>
    </View>    
        </View>
    );
}

export default SignIn