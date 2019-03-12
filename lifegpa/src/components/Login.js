import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

import "./Login.css";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleLoginChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className="login">
        <h1>Welcome back</h1>
        <form className="login-form" onSubmit={this.login}>
          <input
            className="login-username"
            type="type"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleLoginChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          <input
            className="login-password"
            type="type"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleLoginChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          <button>SIGN IN</button>
        </form>
        <p className="terms">
          By using LifeGPA you agree to the <b>Terms of Service</b> and{" "}
          <b>Privacy Policy</b>
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
