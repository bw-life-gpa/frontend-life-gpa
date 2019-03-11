import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Redux deps

import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
