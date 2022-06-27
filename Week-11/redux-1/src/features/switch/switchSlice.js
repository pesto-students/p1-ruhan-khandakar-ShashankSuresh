import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightOn: true,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    toggleSwitch: (state, action) => {
      state.isLightOn = action.payload;
    },
  },
});

export const { toggleSwitch } = switchSlice.actions;

export default switchSlice.reducer;
