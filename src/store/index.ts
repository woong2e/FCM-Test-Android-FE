import { configureStore } from '@reduxjs/toolkit'
import setIsLogin  from './loginSuccessSlice';
const store = configureStore({
  reducer: {
    isLogin: setIsLogin,

  },
});

export default store;