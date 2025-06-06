import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "./types";

interface AuthState {
  token: string | null;
  state: State | null;
}

const initialState: AuthState = {
  state: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setState(state, action: PayloadAction<State>) {
      state.state = action.payload;
    },
    setAcessToken(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
  },
});

export const { setState, setAcessToken } = authSlice.actions;
export default authSlice.reducer;
