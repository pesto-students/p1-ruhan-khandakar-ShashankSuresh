import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import todoReducer, { INITIAL_STATE } from "./reducer";
import { UPDATE_ALL_NOTES } from "./actionTypes";
import { storeInLocalStorage, getDataFromLocalStorage } from "utils";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const updateNote = () => {
    if (state.noteInputData.title || state.noteInputData.note) {
      let allUpdatedNotes = [];

      if (state.noteInputData.id) {
        allUpdatedNotes = state.allNotes.map((note) => {
          if (note.id === state.noteInputData.id) {
            note.title = state.noteInputData.title;
            note.note = state.noteInputData.note;
            note.updated = new Date().getTime();
          }
          return note;
        });
      } else {
        allUpdatedNotes = [
          {
            ...state.noteInputData,
            createdDate: new Date().getTime(),
            id: uuidv4(),
          },
          ...state.allNotes,
        ];
      }
      dispatch({
        type: UPDATE_ALL_NOTES,
        payload: allUpdatedNotes,
      });
      storeInLocalStorage("notes", allUpdatedNotes);
    }
  };

  const fetchNotes = () => {
    let previousNotesData = getDataFromLocalStorage("notes") || [];
    previousNotesData.sort((a, b) => b.createdDate - a.createdDate);
    dispatch({
      type: UPDATE_ALL_NOTES,
      payload: previousNotesData,
    });
  };

  const deleteNote = (nodeId) => {
    const selectedNoteId = state.noteInputData.id || nodeId;
    let allUpdatedNotes = state.allNotes.filter(
      (note) => note.id !== selectedNoteId
    );

    dispatch({
      type: UPDATE_ALL_NOTES,
      payload: allUpdatedNotes,
    });
    storeInLocalStorage("notes", allUpdatedNotes);
  };

  const actions = {
    updateNote,
    fetchNotes,
    deleteNote,
  };

  return (
    <TodoContext.Provider value={{ state, dispatch, ...actions }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
