import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Categories from "./components/onboarding/Categories";
import CategoryDetail from "./components/dashboard/CategoryDetail";
import CategorySettings from "./components/settings/CategorySettings";
import Daily from "./components/daily/Daily";
import Dashboard from "./components/dashboard/Dashboard";
import Details from "./components/dashboard/Details";
import Habits from "./components/onboarding/Habits";
import HabitsSettings from "./components/settings/HabitsSettings";
import Header from "./components/header/Header";
import Introduction from "./components/onboarding/Introduction";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";

const Home = props => (
  <div className="home">
    <h1>Welcome to lifeGPA</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className="App-wrapper">
        

        
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/onboarding" component={Introduction} />
        <Route exact path="/onboarding/categories" component={Categories} />
        <Route path="/onboarding/habits" component={Habits} />
        <Route exact path="/daily" component={Daily} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/details/:id" component={CategoryDetail} />
        <Route exact path="/settings" component={CategorySettings} />
        <Route exact path="/settings/habits" component={HabitsSettings} />
        </div>
      </div>
    );
  }
}

export default App;
