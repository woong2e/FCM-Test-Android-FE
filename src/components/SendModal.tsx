import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Modal, TextInput, Alert} from 'react-native';
import { modalStyles } from '../styles/modal';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setIsModalVisible } from '../store/modalSlice';
import { firestore } from 'firebase-admin';
import { getFcmToken } from '../screens/Auth/SignIn';
import { Filter } from '@react-native-firebase/firestore';
  
const SendModal = (props : any) => {
  const dispatch = useAppDispatch();  
  const isModalVisible = useAppSelector((state) => state.isModalVisible.isModalVisible);
  const userState = useAppSelector((state) => state.userState.name);
  
  const [message, setMessage] = useState('');
  const cleanup = () => {
    setMessage('');
  };
  const handleClose = () => {
    dispatch(setIsModalVisible(false));
  };

  const handleSend = async () => {
    if (message.length == 0) {
      Alert.alert('Please fill in all the required fields!');
    } else {
      const userRef = firestore().collection('AccountInfo');
      const userDocSnap = await userRef.doc(props.email).get();
      if (userDocSnap) {
        await fetch('http://localhost:3000/api/send', {
          method: "POST",
          body: JSON.stringify({
            token: userDocSnap.data()["deviceToken"],
            name: userState,
            notificationContent: message,
          }),
        }); 

        dispatch(setIsModalVisible(false));
      }
    };
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      presentationStyle={'overFullScreen'}
      visible={props.isModalVisible}
      onRequestClose={() => {
        handleClose();
      }}>
      <View style={modalStyles.container}>
         <View style={modalStyles.form}>
          <Text>{props.name}</Text>
         <TextInput
            placeholder="내용"
            onChangeText={text => {
              setMessage(text);
              console.log(message);
            }}></TextInput>
          <View >
            <Pressable
              onPress={() => {
                if (!props.isModalVisible) {
                  cleanup();
                }
                // handleSend();
              }}>
              <Text style={modalStyles.button}> Send </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                cleanup();
                handleClose();
              }}>
              <Text style={modalStyles.button}> Close </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>

  );
};
export default SendModal