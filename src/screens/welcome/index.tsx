import React from 'react';
import { Button, Text, View } from "react-native";
import { WelcomeScreenProps } from './types';


const WelcomeScreen = ({ navigation } : WelcomeScreenProps) => {
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ fontSize: 50 }}>{'WelcomeScreen'}</Text>
        <Button
        title="Go NavigationScreen"
        onPress={() => navigation.navigate('Login')}
      />
        </View>
}

export default WelcomeScreen
