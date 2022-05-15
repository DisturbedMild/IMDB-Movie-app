import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  isLogin: false,
  token: null,
  email: '',
  password: ''
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const loginAction = (values, navigate) => {
  return async (dispatch) => {
    dispatch(
      loginSlice.actions.login({
        isLogin: false,
      })
    );
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFjSeXZaGHVyBJsz0M6-xGi7mERCRXwFs",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (response.ok) {
          return response.json();
        }
      } catch (error) {
        throw new Error("Authentication failed");
      }
    };

    try {
      const data = await sendRequest();
       dispatch(
        loginSlice.actions.login({
          isLogin: true,
          token: data.idToken,
          email: values.email,
          password: values.password
        })
      );
      navigate("../movies", { replace: true });
    } catch (error) {
      // alert(error.message)
    }
  };
};

export default loginSlice;
