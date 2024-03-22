import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import Styles from '../styles/Styles';
import { View } from 'react-native';

function GoogleSignIn() {
  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View>
      <GoogleSigninButton onPress={() => onGoogleButtonPress()} />
    </View>
  );
}

export default GoogleSignIn;