import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
	count: number;
}

const initialState: UserState = {
	count: 0,
};

const userReducer = createSlice({
	name:"userState",
	initialState,
	reducers:{
		addUserState: (state: UserState, action: PayloadAction<number>) => {
			state.count = action.payload;
		},
	},
});

export const {addUserState} = userReducer.actions;

export default userReducer.reducer;
