import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, PermissionsAndroid, Pressable, FlatList } from "react-native";
import { HomeProps } from '../types/types';
import Styles from '../styles/Styles';
import { useEffect } from 'react';
import notifee, { Notification, NotificationAndroid } from '@notifee/react-native';
import firestore from '@react-native-firebase/firestore';
import { userListStyles } from '../styles/userList';
import SendModal from './SendModal';
import { useAppDispatch, useAppSelector} from '../hooks'
import { setIsModalVisible } from '../store/modalSlice';


function UsersTable() { 
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

  const dispatch = useAppDispatch();  
  const isModalVisible = useAppSelector((state) => state.isModalVisible.isModalVisible);

  interface UserProps {
    name: string;
    email: string;
  }

  const User: React.FC<UserProps> = props => {
    return (
      <View style={userListStyles.container}>
        <Text style={userListStyles.title}>{props.name}</Text>
        <Text style={userListStyles.content}>{props.email}</Text>
        <View style={userListStyles.footer}>
          <Pressable style={userListStyles.update} onPress={handleModal}>
              <Text style={Styles.buttonText}>알림 전송</Text>
          </Pressable>
          <SendModal isModalVisible={isModalVisible} props={props}/>
        </View>
      </View>
    );
  }
  const handleModal= () => {
    dispatch(setIsModalVisible(true));
  };

  return (
    <View>
      <View style={userListStyles.header}>
        <Text style={{marginLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          Users
        </Text>
      </View>
      <FlatList
        style={{ height: '80%'}}
        contentContainerStyle={{paddingBottom: 50}}
        data={users}
        // keyExtractor={item => item.author}
        renderItem={(item) => {
          console.log("item :: ", item);
          return (
            <View>
              <User
                name={item.item.name}
                email={item.item.email}
              />
            </View>    
          );
        }}
      />
    </View>
  );
}


export default UsersTable