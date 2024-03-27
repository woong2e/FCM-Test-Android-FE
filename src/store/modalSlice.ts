import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
    isModalVisible: boolean;
}

export const initialState: ModalState = {
    isModalVisible: false,
};

export const modalSlice = createSlice({
    name: "isModalVisible",
    initialState,
    reducers: {
        setIsModalVisible: (state, action: PayloadAction<boolean>) => {
            state.isModalVisible = action.payload ? true : false;
        },
    },
}); 

export const { setIsModalVisible } = modalSlice.actions; 
export default modalSlice.reducer;