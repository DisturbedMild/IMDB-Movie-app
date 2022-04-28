import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialLoginState = {
	isLogin: false
}

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {},
});

const store = configureStore({
  reducer: loginSlice.reducer,
});

export default store;
