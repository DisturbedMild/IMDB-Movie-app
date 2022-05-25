import { createSlice } from "@reduxjs/toolkit";

const initialRegistrationState = {
  notificationMessage: "",
  isCreated: false,
  isLoading: false,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState: initialRegistrationState,
  reducers: {
    showNotification: (state, action) => { // Success or error registration message
      state.notificationMessage = action.payload.notificationMessage;
      state.isCreated = action.payload.isCreated;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const sendNewUserData = (values, formikActions, navigate) => {
  return async (dispatch) => {
    dispatch(
      registrationSlice.actions.showNotification({
        notificationMessage: "",
        isCreated: false,
        isLoading: true,
      })
    );
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFjSeXZaGHVyBJsz0M6-xGi7mERCRXwFs",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (!response.ok) {
          throw new Error("Sending user data failed!");
        }
      } catch (error) {
        throw new Error("Sending user data failed!");
      }
    };
    try {
      await sendRequest();

      dispatch(
        registrationSlice.actions.showNotification({
          notificationMessage: "Your account was succesfully created!",
          isCreated: true,
          isLoading: false,
        })
      );
      formikActions.resetForm();
      navigate('../login', {replace: false})

    } catch (err) {
      dispatch(
        registrationSlice.actions.showNotification({
          notificationMessage: "Your email was already used!",
          isCreated: false,
          isLoading: false,
        })
      );
      formikActions.setFieldError("email", "Email is already used");
      values.email = "";
    }
  };
};

export default registrationSlice;
