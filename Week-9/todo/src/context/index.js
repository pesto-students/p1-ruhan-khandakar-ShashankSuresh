/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useReducer, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import todoReducer, { INITIAL_STATE } from "./reducer";
import {
  FILTER_NOTES,
  MODAL_TOGGLE,
  SEARCH_TEXT,
  TOGGLE_COMPLETION,
  TOGGLE_PINNED_POST,
  UPDATE_ALL_NOTES,
} from "./actionTypes";
import { storeInLocalStorage, getDataFromLocalStorage, debounce } from "utils";

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
        const { note, title } = state.noteInputData;

        if (
          (note !== "" && !note.trim() && !title) ||
          (title !== "" && !title.trim() && !note)
        ) {
          return false;
        }

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

  const toggleNoteCompletion = (nodeId) => {
    const allUpdatedNotes = state.allNotes.map((note) => {
      if (note.id === nodeId) {
        note.completed = !note.completed;
      }
      return note;
    });
    dispatch({
      type: TOGGLE_COMPLETION,
      payload: allUpdatedNotes,
    });
    storeInLocalStorage("notes", allUpdatedNotes);
  };

  const editNote = (updatedNote) => {

    const allUpdatedNotes = state.allNotes.map((note) => {
      if (note.id === updatedNote.id) {
        if (updatedNote.title) {
          note.title = updatedNote.title;
        }
        if (updatedNote.note) {
          note.note = updatedNote.note;
        }

        note.updated = new Date().getTime();
      }
      return note;
    });

    dispatch({
      type: UPDATE_ALL_NOTES,
      payload: allUpdatedNotes,
    });
    storeInLocalStorage("notes", allUpdatedNotes);
  };

  const togglePinned = (noteId) => {
    const allUpdatedNotes = state.allNotes.map((note) => {
      if (note.id === noteId) {
        note.isPinned = !note.isPinned;
      }
      return note;
    });
    dispatch({
      type: TOGGLE_PINNED_POST,
      payload: allUpdatedNotes,
    });
    storeInLocalStorage("notes", allUpdatedNotes);
  };

  const handleModalToggle = (value) => {
    dispatch({
      type: MODAL_TOGGLE,
      payload: value || !state.open,
    });
  };

  const handleFilter = (searchValue, allNotes) => {
    const filteredNotes = allNotes.filter(
      ({ title, note }) =>
        title.toLowerCase().includes(searchValue.toLowerCase()) ||
        note.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch({
      type: FILTER_NOTES,
      payload: filteredNotes,
    });
  };

  const debouncedSearch = useCallback(debounce(handleFilter, 500), []);

  const handleSearch = (searchText) => {
    dispatch({
      type: SEARCH_TEXT,
      payload: searchText,
    });
    debouncedSearch(searchText, state.allNotes);
  };

  const actions = {
    updateNote,
    fetchNotes,
    deleteNote,
    toggleNoteCompletion,
    togglePinned,
    handleModalToggle,
    editNote,
    handleSearch,
  };

  return (
    <TodoContext.Provider value={{ state, dispatch, ...actions }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
