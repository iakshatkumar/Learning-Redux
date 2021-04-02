import { combineReducers } from "redux";

import counterReducer from "./counter";
import userReducer from "./user";

const allReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default allReducer;
