import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    isLogin: boolean;
}

export const initialState: LoginState = {
    isLogin: false,
};

export const loginSuccessSlice = createSlice({
    name: "isLogin",
    initialState,
    reducers: {
        setIsLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload ? true : false;
        },
    },
}); 

export const { setIsLogin } = loginSuccessSlice.actions; 
export default loginSuccessSlice.reducer;