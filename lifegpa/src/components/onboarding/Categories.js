import React, { Component } from "react";
import ColorPicker from "./ColorPicker";
import "./Categories.css";

export class Categories extends Component {
  state = {
    category: "",
    color: ""
  };

  handleCategoryChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="categories">
        <h2>Choose Your Categories</h2>
        <p>
          Add as many categories as you want, use the list below as a motivator!
        </p>
        <ul>
          <li>Health</li>
          <li>Physical Fitness</li>
          <li>Studying</li>
          <li>Work Efficiency</li>
        </ul>
        <form>
          <input
            className="add-category"
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleCategoryChanges}
            placeholder="Enter Category"
            autoComplete="off"
            required
          />
          <ColorPicker />
          <button>Add Category</button>
        </form>
      </div>
    );
  }
}

export default Categories;
