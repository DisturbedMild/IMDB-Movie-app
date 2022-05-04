import { configureStore } from "@reduxjs/toolkit";

import loginSlice from './login-slice';
import registrationSlice from './registration-slice';


const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    registration: registrationSlice.reducer
  }
});

export default store;
