import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/store/reducers";

const store = configureStore({
	reducer: {
		root: rootReducer,
	},
});

export default store;
