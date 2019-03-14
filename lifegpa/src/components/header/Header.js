import "./Header.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  state = {
    userId: null
  };

  componentDidMount = () => {
    this.getUserID();
  };

  getUserID = () => {
    const userID = localStorage.getItem("userID");
    this.setState({ ...this.state, userId: userID });
    return userID;
  };

  Logout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("authorization");
  };

  render() {
    const userID = localStorage.getItem("userID");
    if (!userID) {
      return (
        <div className="header">
          <div className="left">
            <Link to={`/`}>
              <h2>Life GPA</h2>
            </Link>
          </div>
          <div className="right">
            <Link to={`/register`}>
              <p>Register</p>
            </Link>
            <Link to={`/login`}>
              <p>Login</p>
            </Link>
          </div>
        </div>
      );
    } else if (userID) {
      return (
        <div className="header">
          <div className="left">
            <Link to={`/`}>
              <h2>Life GPA</h2>
            </Link>
          </div>
          <div className="right">
            <Link to="/dashboard">
              <p>Dashboard</p>
            </Link>
            <Link to={`/login`}>
              <p onClick={this.Logout}>Logout</p>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Header;
