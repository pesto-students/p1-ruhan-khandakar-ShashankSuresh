import { configureStore } from "@reduxjs/toolkit";

import switchReducer from "features/switch/switchSlice";

export const store = configureStore({
  reducer: {
    theme: switchReducer,
  },
});
