import React, { Component } from "react";
import "./Categories.css";

export class CategoryList extends Component {
  render() {
    return (
      <div
        className="category-added"
        style={{ border: `2px solid ${this.props.category.color}` }}
      >
        <p
          style={{
            color: this.props.category.color
          }}
        >
          {this.props.category.categoryTitle}
        </p>
      </div>
    );
  }
}

export default CategoryList;
