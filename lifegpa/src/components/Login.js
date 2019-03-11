import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

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
      <div>
        <form onSubmit={this.login}>
          <input
            type="type"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleLoginChanges}
            placeholder="Username"
            required
          />
          <input
            type="type"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleLoginChanges}
            placeholder="Password"
            required
          />
          <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
