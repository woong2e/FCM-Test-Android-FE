import { StyleSheet} from "react-native";
const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5', // 배경색상 추가
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#333', // 글자색상 추가
    },
    button: {
      backgroundColor: '#000000', // 버튼 배경색상 추가
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff', // 버튼 글자색상 추가
      fontSize: 18,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 3,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 30,
      margin: 5,
    },
    loginButton: {
      backgroundColor: '#000000', // 버튼 배경색상 추가
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  export default Styles;
