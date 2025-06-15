import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeClientCookie } from "@/utils/cookies/client";
import { StorageEnum } from "@/types/storage";
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
    clearState(state) {
      removeClientCookie(StorageEnum.ACCESS_TOKEN);
      state.state = null;
      state.token = null;
    },
  },
});

export const { setState, setAcessToken, clearState } = authSlice.actions;
export default authSlice.reducer;
