import React, { Component } from "react";
import { TwitterPicker } from "react-color";

export class ColorPicker extends Component {
  render() {
    return (
      <div className="color-picker">
        <TwitterPicker />
      </div>
    );
  }
}

export default ColorPicker;
