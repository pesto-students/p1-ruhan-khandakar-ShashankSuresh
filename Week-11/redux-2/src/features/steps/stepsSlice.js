import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepCount: 0,
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    addStep: (state) => {
      state.stepCount++;
    },
    resetStep: (state) => {
      state.stepCount = 0;
    },
  },
});

export const { addStep, resetStep } = stepsSlice.actions;
export default stepsSlice.reducer;
