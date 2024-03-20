// import { View, TextInput, Text } from "react-native"
// import Styles from "../styles/Styles";
// import { useState } from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { useAppDispatch, useAppSelector } from "../hooks";
// import { useNavigation } from "@react-navigation/native";
// import { setIsLogin } from "../store/loginSuccessSlice";
// import { SignInProps } from "../types/types";


// const Login = () => {
//   const [ID, setID] = useState('');
//   const [PW, setPW] = useState('');

//   const dispatch = useAppDispatch();    
  
//   return (
//     <View>
//       <View style={{alignItems: 'stretch'}}>
//         <TextInput
//           placeholder="ID"
//           style={Styles.input}
//           autoCapitalize="none"
//           value={ID}
//           onChangeText={(id) => setID(id)}
//           autoCorrect={false}
//         />
//         <TextInput
//           placeholder="Password"
//           style={Styles.input}
//           autoCapitalize="none"
//           value={PW}
//           onChangeText={(pw) => setPW(pw)}
//           autoCorrect={false}
//         />
//       </View>
//         <TouchableOpacity
//         style={Styles.button}
//         onPress={() => dispatch(setIsLogin(true))}>
//         <Text style={Styles.buttonText}>로그인</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }

// export default Login;