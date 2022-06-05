import { createContext, useReducer } from "react";
import { UPDATE_ALL_NOTES } from "./actionTypes";

import todoReducer, { INITIAL_STATE } from "./reducer";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const updateNote = () => {
    if (state.noteInputData.title || state.noteInputData.note) {
      dispatch({
        type: UPDATE_ALL_NOTES,
        payload: [
          ...state.allNotes,
          {
            ...state.noteInputData,
            createdDate: new Date().getTime(),
          },
        ],
      });
    }
  };

  return (
    <TodoContext.Provider value={{ state, dispatch, updateNote }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
