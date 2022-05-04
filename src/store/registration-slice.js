import { createSlice } from "@reduxjs/toolkit";

const initialRegistrationState = {
  notificationMessage: "",
  isCreated: false,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState: initialRegistrationState,
  reducers: {
    showNotification: (state, action) => {
      state.notificationMessage = action.payload.notificationMessage;
      state.isCreated = action.payload.isCreated;
    },
  },
});

export const sendNewUserData = (values) => {
  return async (dispatch) => {
    dispatch(
      registrationSlice.actions.showNotification({
        notificationMessage: "",
        isCreated: false,
      })
    );
    const isUserExist = async () => {
      let isExist = false;
      try {
        const response = await fetch(
          "https://imdb-app-7eda7-default-rtdb.europe-west1.firebasedatabase.app/users.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        for (let key in data) {
          if (data[key].email === values.email) {
            return (isExist = true);
          }
        }
        return isExist;
      } catch (err) {
        throw new Error(err);
      }
    };
    const sendRequest = async () => {
      const response = await fetch(
        "https://imdb-app-7eda7-default-rtdb.europe-west1.firebasedatabase.app/users.json",
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
    };

    try {
      const isExist = await isUserExist();
      console.log(isExist);
      if (isExist) {
        dispatch(
          registrationSlice.actions.showNotification({
            notificationMessage: "Your email was already used!",
            isCreated: false,
          })
        );
      } else {
        await sendRequest();
        dispatch(
          registrationSlice.actions.showNotification({
            notificationMessage: "Your account was succesfully created!",
            isCreated: true,
          })
        );
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const registrationActions = registrationSlice.actions;

export default registrationSlice;
