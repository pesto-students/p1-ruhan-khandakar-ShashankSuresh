import { combineReducers } from "redux";

import switchReducer from "features/switch/switchSlice";

const reducer = combineReducers({
  switch: switchReducer,
});

export default reducer;
