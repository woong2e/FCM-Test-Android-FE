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
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload ? true : false;
        },
    },
}); 

export const { setLoggedIn } = loginSuccessSlice.actions; 
export default loginSuccessSlice.reducer;