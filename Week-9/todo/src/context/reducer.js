import { INPUT_BOX_CLICKED } from "./actionTypes";

export const INITIAL_STATE = {
  isInputBoxClicked: false,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case INPUT_BOX_CLICKED:
      console.log("clicked");
      return {
        ...state,
        isInputBoxClicked: payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
