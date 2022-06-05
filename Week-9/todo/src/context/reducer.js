import {
  INPUT_BOX_CLICKED,
  INPUT_TEXT_CHANGE,
  UPDATE_ALL_NOTES,
  UPDATE_NOTE,
} from "./actionTypes";

export const INITIAL_STATE = {
  isInputBoxClicked: false,
  noteInputData: {
    title: "",
    note: "",
    createdDate: null,
  },
  allNotes: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case UPDATE_NOTE:
      return {
        ...state,
        noteInputData: payload,
      };
    case INPUT_BOX_CLICKED:
      return {
        ...state,
        isInputBoxClicked: payload,
      };
    case INPUT_TEXT_CHANGE:
      return {
        ...state,
        noteInputData: {
          ...state.noteInputData,
          [payload.name]: payload.value,
        },
      };
    case UPDATE_ALL_NOTES:
      return {
        ...state,
        allNotes: payload,
        noteInputData: {
          title: "",
          note: "",
          createdDate: null,
        },
      };
    default:
      return state;
  }
};

export default todoReducer;
