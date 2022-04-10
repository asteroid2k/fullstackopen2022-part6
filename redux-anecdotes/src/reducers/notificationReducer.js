import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotif: (state, action) => action.payload,
    removeNotif: () => "",
  },
});

export const setNotification = (text, duration) => {
  return async (dispatch) => {
    dispatch(setNotif(text));
    setTimeout(() => dispatch(removeNotif()), duration * 1000);
  };
};

export const { setNotif, removeNotif } = notificationSlice.actions;
export default notificationSlice.reducer;
