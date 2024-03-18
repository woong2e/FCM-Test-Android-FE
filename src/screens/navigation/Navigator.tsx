import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../welcome';
import LoginScreen from '../login';
import { Text, View } from 'react-native';
import type { RootStackParamList } from './types';



const RootStack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Welcome">
        <RootStack.Screen name='Welcome' component={WelcomeScreen} />
        <RootStack.Screen name='Login' component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;