import React, { Component } from "react";
import { connect } from "react-redux";

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
        <form>
          <input
            type="type"
            name="username"
            value={this.state.registration.username}
            onChange={this.handleRegChanges}
            placeholder="Enter Username"
            required
          />
          <input
            type="email"
            name="email"
            value={this.state.registration.email}
            onChange={this.handleRegChanges}
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            name="password"
            value={this.state.registration.password}
            onChange={this.handleRegChanges}
            placeholder="Enter Password"
            required
          />
          <input
            type="password"
            name="passCheck"
            value={this.state.registration.passCheck}
            onChange={this.handleRegChanges}
            placeholder="Retype password"
            required
          />
        </form>
      </div>
    );
  }
}

export default connect()(Register);
