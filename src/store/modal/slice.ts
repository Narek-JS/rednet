import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState, ModalType } from "./types";

const initialState: ModalState = {
  open: false,
  type: null,
  props: {},
};

export const modalSlice = createSlice({
  name: "globalModal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        props?: Record<string, unknown>;
        type: ModalType;
      }>
    ) => {
      state.props = action.payload.props ?? {};
      state.type = action.payload.type;
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
      state.type = null;
      state.props = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
