import { configureStore } from '@reduxjs/toolkit'
import setLoggedIn  from './loginSuccessSlice';
import setIsModalVisible from './modalSlice';
import setLoggedInUser from './loginUserSlice';
const store = configureStore({
  reducer: {
    isLogin: setLoggedIn,
    isModalVisible: setIsModalVisible,
    userState: setLoggedInUser,
  },
});

export default store;