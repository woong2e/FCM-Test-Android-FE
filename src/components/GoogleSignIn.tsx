import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import Styles from '../styles/Styles';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setLoggedIn } from '../store/loginSuccessSlice';

function GoogleSignIn() {
  const dispatch = useAppDispatch();    
  const isLogin = useAppSelector((state) => state.isLogin);
  const checkLoggedIn = () => {
    auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(setLoggedIn(true));
        } else {
          dispatch(setLoggedIn(false));
        }
        console.log(isLogin.isLogin)
    })
  }

  useEffect(() => {
    checkLoggedIn();
  }, [])

  const onGoogleButtonPress = async () => {
    console.log("됐나?");
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log(idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
      <GoogleSigninButton 
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!')).catch(error => {console.log(error)})
}  />
  );
}

export default GoogleSignIn;