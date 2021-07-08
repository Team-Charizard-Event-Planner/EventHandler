import { combineReducers } from "redux";
import userReducer from "./userReducer";
import eventReducer from "./eventReducer";

const reducers = combineReducers({
  users: userReducer,
  events: eventReducer,
});

export default reducers;
