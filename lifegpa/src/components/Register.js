import React, { Component } from "react";
import { connect } from "react-redux";

import "./Register.css";

export class Register extends Component {
  state = {
    registration: {
      username: "",
      email: "",
      password: "",
      passCheck: ""
    }
  };

  handleRegChanges = e => {
    this.setState({
      registration: {
        ...this.state.registration,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Join Now and Get Your Free Score!</h2>
        <form className="form">
          <input
            className="reg-username"
            type="type"
            name="username"
            value={this.state.registration.username}
            onChange={this.handleRegChanges}
            placeholder="Enter Username"
            required
          />
          <input
            className="reg-email"
            type="email"
            name="email"
            value={this.state.registration.email}
            onChange={this.handleRegChanges}
            placeholder="Enter Email"
            required
          />
          <input
            className="reg-password"
            type="password"
            name="password"
            value={this.state.registration.password}
            onChange={this.handleRegChanges}
            placeholder="Enter Password"
            required
          />
          <input
            className="reg-password"
            type="password"
            name="passCheck"
            value={this.state.registration.passCheck}
            onChange={this.handleRegChanges}
            placeholder="Retype password"
            required
          />
          <button>Register Now</button>
        </form>
        <p>
          By using LifeGPA you agree to the <b>Terms of Service</b> and{" "}
          <b>Privacy Policy</b>
        </p>
      </div>
    );
  }
}

export default connect()(Register);
