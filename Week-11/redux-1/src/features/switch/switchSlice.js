import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightOn: true,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.isLightOn = !state.isLightOn;
    },
  },
});

export const { toggleSwitch } = switchSlice.actions;

export default switchSlice.reducer;
