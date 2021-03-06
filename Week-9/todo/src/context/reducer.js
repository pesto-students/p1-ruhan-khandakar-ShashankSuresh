import {
  INPUT_BOX_CLICKED,
  INPUT_TEXT_CHANGE,
  UPDATE_ALL_NOTES,
  UPDATE_NOTE,
  MODAL_TOGGLE,
  TOGGLE_PINNED_POST,
  TOGGLE_COMPLETION,
  SEARCH_TEXT,
  FILTER_NOTES,
} from "./actionTypes";

export const INITIAL_STATE = {
  isInputBoxClicked: false,
  open: false,
  noteInputData: {
    title: "",
    note: "",
    createdDate: null,
  },
  allNotes: [],
  searchText: "",
  filteredNotes: null,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case MODAL_TOGGLE:
      return {
        ...state,
        open: payload,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        noteInputData: payload,
      };
    case INPUT_BOX_CLICKED:
      return {
        ...state,
        noteInputData: {
          title: "",
          note: "",
          createdDate: null,
        },
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
    case TOGGLE_PINNED_POST:
    case TOGGLE_COMPLETION:
      return {
        ...state,
        allNotes: payload,
      };
    case SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      };
    case FILTER_NOTES:
      return {
        ...state,
        filteredNotes: payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
