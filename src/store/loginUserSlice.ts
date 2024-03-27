import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    name: string;
}

export const initialState: UserState = {
    name: '',
};

export const loginUserSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        setLoggedInUser: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
}); 

export const { setLoggedInUser } = loginUserSlice.actions; 
export default loginUserSlice.reducer;