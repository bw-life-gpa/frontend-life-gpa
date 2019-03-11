import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Introduction from "./components/onboarding/Introduction";
import Dashboard from "./components/dashboard/Dashboard";
import Details from "./components/dashboard/Details";
import CategoryDetail from './components/dashboard/CategoryDetail'
import Header from './components/header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/onboarding" component={Introduction} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/details/:name" component={CategoryDetail} />

      </div>
    );
  }
}

export default App;
