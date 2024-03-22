/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './screens/Navigator';
import { Provider } from 'react-redux';
import store from './store';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

const googleSigninConfigure = () => {
  GoogleSignin.configure({
    webClientId:
      '417100656285-8inqc6u3e95130hp4a421b9iukbq3asu.apps.googleusercontent.com',
  })
}


function App(): React.JSX.Element {
  useEffect(() => {
    googleSigninConfigure();
  });

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}


export default App;
