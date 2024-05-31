import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "@/store/reducers/userReducer";

// rootReducer /** 主 Reducer
const rootReducer = combineReducers({
	userState: userReducer,
});

export default rootReducer;
