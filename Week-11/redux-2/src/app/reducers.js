import { combineReducers } from "redux";

import stepsReducer from "features/steps/stepsSlice";

const reducer = combineReducers({
  steps: stepsReducer,
});

export default reducer;
