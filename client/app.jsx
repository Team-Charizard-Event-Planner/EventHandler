import React from "react";
import { render } from "react-dom";
import { Provider, createStore } from "react-redux";

const store = createStore();

const App = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
