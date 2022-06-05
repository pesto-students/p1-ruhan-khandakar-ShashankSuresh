import { createContext, useReducer } from "react";

import todoReducer, { INITIAL_STATE } from "./reducer";
import { UPDATE_ALL_NOTES } from "./actionTypes";
import { storeInLocalStorage, getDataFromLocalStorage } from "utils";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const updateNote = () => {
    if (state.noteInputData.title || state.noteInputData.note) {
      const allUpdatedNotes = [
        ...state.allNotes,
        {
          ...state.noteInputData,
          createdDate: new Date().getTime(),
        },
      ];
      dispatch({
        type: UPDATE_ALL_NOTES,
        payload: allUpdatedNotes,
      });
      storeInLocalStorage("notes", allUpdatedNotes);
    }
  };

  const fetchNotes = () => {
    const previousNotesData = getDataFromLocalStorage("notes");
    dispatch({
      type: UPDATE_ALL_NOTES,
      payload: previousNotesData,
    });
  };

  const actions = {
    updateNote,
    fetchNotes,
  };

  return (
    <TodoContext.Provider value={{ state, dispatch, ...actions }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
