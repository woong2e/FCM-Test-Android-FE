import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { WelcomeProps } from '../types/types';
import Styles from '../styles/Styles';


function Welcome({ navigation } : WelcomeProps) {
    return <View style={Styles.container}>
        <Text style={Styles.title}>{'로그인 하세요.'}</Text>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={Styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={Styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
}


export default Welcome
