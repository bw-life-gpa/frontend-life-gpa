import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Router deps
import { BrowserRouter as Router, withRouter } from "react-router-dom";

//Redux deps
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
