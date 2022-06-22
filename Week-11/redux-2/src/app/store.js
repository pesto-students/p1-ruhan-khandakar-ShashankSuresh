import { configureStore } from "@reduxjs/toolkit";

import stepsReducer from "features/steps/stepsSlice.js";

const store = configureStore({
  reducer: {
    steps: stepsReducer,
  },
});

export default store;
