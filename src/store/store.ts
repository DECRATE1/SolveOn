import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./PopUpSlice";
import appReducer from "./AppSlice";
import fetchReducer from "./FetchSlice";
export const store = configureStore({
  reducer: {
    popup: popupReducer,
    app: appReducer,
    fetch: fetchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
