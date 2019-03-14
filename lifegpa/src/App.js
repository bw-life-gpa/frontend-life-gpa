import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Categories from "./components/onboarding/Categories";
import CategoryDetail from "./components/dashboard/CategoryDetail";
import Daily from "./components/daily/Daily";
import Dashboard from "./components/dashboard/Dashboard";
import Details from "./components/dashboard/Details";
import Habits from "./components/onboarding/Habits";
import Header from "./components/header/Header";
import Introduction from "./components/onboarding/Introduction";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <h1>Welcome to lifeGPA</h1>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/onboarding" component={Introduction} />
        <Route exact path="/onboarding/categories" component={Categories} />
        <Route path="/onboarding/habits" component={Habits} />
        <Route exact path="/daily" component={Daily} />
        <Route exact path="/details" component={Details} />
        <Route
          exact
          path="/details/:id"
          component={CategoryDetail}
        />
      </div>
    );
  }
}

export default App;
