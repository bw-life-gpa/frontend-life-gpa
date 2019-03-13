import React, { Component } from "react";
import { register, login } from "../actions";
import { connect } from "react-redux";
import "./Register.css";

export class Register extends Component {
  state = {
    registration: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      userImgUrl: "",
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

  register = e => {
    e.preventDefault();
    let newUser = {
      username: this.state.registration.username,
      password: this.state.registration.password,
      fullName: `${this.state.registration.firstname} ${
        this.state.registration.lastname
        }`,
      email: this.state.registration.email,
      userImgUrl: ""
    };

    const newLogin = {
      username: this.state.registration.username,
      password: this.state.registration.password
    }
    return this.state.registration.password ===
      this.state.registration.passCheck
      ? this.props.register(newUser).then(() => this.props.login(newLogin)).then(() => this.props.history.push("/onboarding"))
      : alert(
        "Password and not match. Please refill the registration form with matching passwords in both fields"
      );
  };

  render() {
    return (
      <div>
        <h2>Join Now and Get Your Free Score!</h2>
        <form className="form" onSubmit={this.register}>
          <input
            className="reg-username"
            type="type"
            name="username"
            value={this.state.registration.username}
            onChange={this.handleRegChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          <input
            className="reg-username"
            type="text"
            name="firstname"
            value={this.state.registration.firstname}
            onChange={this.handleRegChanges}
            placeholder="Enter First Name"
            autoComplete="off"
            required
          />
          <input
            className="reg-username"
            type="text"
            name="lastname"
            value={this.state.registration.lastname}
            onChange={this.handleRegChanges}
            placeholder="Enter Last Name"
            autoComplete="off"
            required
          />
          <input
            className="reg-email"
            type="email"
            name="email"
            value={this.state.registration.email}
            onChange={this.handleRegChanges}
            placeholder="Enter Email"
            autoComplete="off"
            required
          />
          <input
            className="reg-password"
            type="password"
            name="password"
            value={this.state.registration.password}
            onChange={this.handleRegChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          <input
            className="reg-password"
            type="password"
            name="passCheck"
            value={this.state.registration.passCheck}
            onChange={this.handleRegChanges}
            placeholder="Retype password"
            autoComplete="off"
            required
          />
          <button>Register Now</button>
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
  {
    register,
    login
  }
)(Register);
