import { createContext, useReducer } from "react";

import todoReducer, { INITIAL_STATE } from "./reducer";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
