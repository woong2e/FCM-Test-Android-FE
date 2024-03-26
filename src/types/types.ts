import { NativeStackScreenProps } from "@react-navigation/native-stack";
import store from "../store";

export type RootStackParamList = {
    SignUp: undefined;
    SignIn: undefined;
    Welcome: undefined;
    Home: undefined;
    Login: undefined;
};
export type userInfo = {
    name: number;
    email: string;
  }
export type SignUpProps = NativeStackScreenProps<RootStackParamList, "SignUp">;
export type SignInProps = NativeStackScreenProps<RootStackParamList, "SignIn">;
export type WelcomeProps = NativeStackScreenProps<RootStackParamList, "Welcome">;
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
