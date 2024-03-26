import { configureStore } from '@reduxjs/toolkit'
import setLoggedIn  from './loginSuccessSlice';
const store = configureStore({
  reducer: {
    isLogin: setLoggedIn,

  },
});

export default store;