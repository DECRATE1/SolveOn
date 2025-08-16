import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  visibleLimit: number;
  selectedItem: number | null;
}

const initialState: AppState = {
  visibleLimit: 4,
  selectedItem: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setVisibleLimit: (state, action: PayloadAction<number>) => {
      state.visibleLimit = action.payload;
    },
    selectItem: (state, action: PayloadAction<number | null>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setVisibleLimit, selectItem } = appSlice.actions;

export default appSlice.reducer;
