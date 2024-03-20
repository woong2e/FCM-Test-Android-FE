import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { Text, View } from 'react-native';
import type { RootStackParamList } from '../types/types';
import Welcome from './Welcome';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Home from './Home';



const RootStack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Welcome">
        <RootStack.Screen name='Welcome' component={Welcome} />
        <RootStack.Screen name='SignIn' component={SignIn} />
        <RootStack.Screen name='SignUp' component={SignUp} />
        <RootStack.Screen name='Home' component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;