import React, { Component } from "react";
import "./Habits.css";

export class Habits extends Component {
  render() {
    return (
      <div className="onboard-habits">
        <h1>Choose Your Habits</h1>
        <p>Select from the list of habits below or create your own habit!</p>
      </div>
    );
  }
}

export default Habits;
