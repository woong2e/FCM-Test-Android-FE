import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, PermissionsAndroid, Pressable, FlatList } from "react-native";
import { HomeProps } from '../types/types';
import Styles from '../styles/Styles';
import { useEffect } from 'react';
import notifee, { Notification, NotificationAndroid } from '@notifee/react-native';
import firestore from '@react-native-firebase/firestore';
import { userListStyles } from '../styles/userList';
import SendModal from './SendModal';


interface UserProps {
    name: string;
    email: string;
    // sendAlram: () => {};
  }

const User: React.FC<UserProps> = props => {
    // const sendAlram = () => {
    //     props.sendAlram(props.email);
    // };
    return (
        <View style={userListStyles.container}>
          <Text style={userListStyles.title}>{props.name}</Text>
          <Text style={userListStyles.content}>{props.email}</Text>
          <View style={userListStyles.footer}>
            {/* <Pressable style={userListStyles.update} onPress={() => {sendAlram}}>
                <Text style={Styles.buttonText}>알림 전송</Text>
            </Pressable> */}
          </View>
        </View>
      );
}
   
function UsersTable() { 
  const [isModalVisible, setModalVisible] = useState(false);
  const ref = firestore().collection('AccountInfo');
	const [users, setUsers] = useState();

	useEffect(() => {
		return (ref.onSnapshot(querySnapshot => {
			const list = [];
			querySnapshot.forEach(doc => {
			  const { name, email, device_token } = doc._data;
			  list.push({
				name: name,
                email: email,
                device_token: device_token,
              });
			  console.log("name, email, device_token ::::: ", `${name}, ${email}, ${device_token}`);
			  });
			  setUsers(list);
			  
			}));
		}, []);

  const handlePlus = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <View style={userListStyles.header}>
        <Text style={{marginLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          Users
        </Text>
        <Pressable onPress={() => handlePlus()}>
          <Text>알람 보내기</Text>
        </Pressable>
      </View>
      <FlatList
        style={{ height: '80%'}}
        contentContainerStyle={{paddingBottom: 50}}
        data={users}
        // keyExtractor={item => item.author}
        renderItem={(item) => {
          return (
            <View>
              <User
                name={item.name}
                email={item.email}
              />
              <Pressable onPress={() => handlePlus()}>
              <Text>알람 보내기</Text>
              </Pressable>
            
            </View>    
          );
        }}
      />
      {/* <SendModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        todo={todo}></SendModal> */}
    </View>
  );
}


export default UsersTable