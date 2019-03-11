import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Introduction from "./components/onboarding/Introduction";
import Dashboard from "./components/dashboard/Dashboard";
import Details from "./components/dashboard/Details";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Life GPA</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        {/* <Route exact path="/" component={Dashboard} /> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/onboarding" component={Introduction} />

        <Route exact path="/" component={Dashboard} />
        <Route exact path="/details" component={Details} />
      </div>
    );
  }
}

export default App;
