import { RootState } from "..";

export const selectState = (state: RootState) => state.auth.state;
