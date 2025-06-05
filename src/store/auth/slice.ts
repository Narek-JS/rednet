import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state) {
      state.user = null;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
