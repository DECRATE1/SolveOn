import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FetchState {
  status: "idle" | "send" | "success" | "error";
}

const initialState: FetchState = {
  status: "idle",
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<FetchState["status"]>) => {
      state.status = action.payload;
    },
  },
});

export const { setState } = fetchSlice.actions;

export default fetchSlice.reducer;
