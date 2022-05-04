import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
	isLogin: false
}


const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {

  },
});

export default loginSlice;