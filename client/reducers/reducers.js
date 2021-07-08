import { combineReducers } from "redux";
import userReducer from "./userReducer";
import eventReducer from "./eventReducer";

const reducers = combineReducers({
  users: userReducer,
  events: eventReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;
