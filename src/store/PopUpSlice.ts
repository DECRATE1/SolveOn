import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isOpen: boolean;
}

const initialState: PopupState = {
  isOpen: false,
};

const popUpSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopUp: (state) => {
      state.isOpen = true;
    },
    closePopUp: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPopUp, closePopUp } = popUpSlice.actions;

export default popUpSlice.reducer;
