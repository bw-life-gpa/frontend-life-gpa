import React, { Component } from "react";
import { CirclePicker } from "react-color";
import "./Categories.css";

export class ColorPicker extends Component {
  render() {
    return (
      <div className="color-picker">
        <CirclePicker />
      </div>
    );
  }
}

export default ColorPicker;
