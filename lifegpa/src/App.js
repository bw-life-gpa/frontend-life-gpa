import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Introduction from "./components/onboarding/Introduction";
import Habits from "./components/onboarding/Habits";
import Dashboard from "./components/dashboard/Dashboard";
import Details from "./components/dashboard/Details";
import CategoryDetail from "./components/dashboard/CategoryDetail";
import Header from "./components/header/Header";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/onboarding" component={Introduction} />
        <Route path="/onboarding/habits" component={Habits} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/details/:name" component={CategoryDetail} />
      </div>
    );
  }
}

export default App;
