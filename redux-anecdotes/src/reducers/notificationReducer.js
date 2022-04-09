import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotif: (state, action) => action.payload,
    removeNotif: () => "",
  },
});

export const { setNotif, removeNotif } = notificationSlice.actions;
export default notificationSlice.reducer;
