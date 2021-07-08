import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers/reducers";

const store = createStore(reducers, composeWithDevTools());

export default store;