import React, { Component } from "react";
import { CirclePicker } from "react-color";
import CategoryList from "./CategoryList";
import { getUserCategories, addCategory } from "../../actions";
import { connect } from "react-redux";
import "./Categories.css";

export class Categories extends Component {
  state = {
    categoryTitle: "",
    color: "",
    userId: null
  };

  componentDidMount() {
    this.props.getUserCategories(this.getUserID());
  }

  getUserID = () => {
    const userID = localStorage.getItem("userID");
    this.setState({ ...this.state, userId: userID });
    return userID;
  };

  handleCategoryChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeComplete = color => {
    this.setState({ color: color.hex });
  };

  handleAddCategory = e => {
    e.preventDefault();

    const newCategory = {
      categoryTitle: this.state.categoryTitle,
      color: this.state.color,
      userId: this.state.userId
    };

    this.props.addCategory(newCategory);

    this.setState({
      categoryTitle: "",
      color: ""
    });
  };

  render() {
    if (this.props.addingCategory) {
      console.log("loading", this.props.category);
      return <div>Loading...</div>;
    }

    return (
      <div className="categories">
        {console.log("From categories:", this.props.category)}
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
        <div className="new-category">
          {this.props.category.map((category, index) => (
            <CategoryList key={index} category={category} />
          ))}
        </div>
        <form onSubmit={this.handleAddCategory}>
          <input
            className="add-category"
            type="text"
            name="categoryTitle"
            value={this.state.category}
            onChange={this.handleCategoryChanges}
            placeholder="Enter Category"
            autoComplete="off"
            required
          />
          <CirclePicker
            className="color-picker"
            color={this.state.color}
            onChangeComplete={this.handleChangeComplete}
          />
          <button>Add Category</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.loginReducer.id,
    category: state.userCategoryReducer.category,
    addingCategory: state.userCategoryReducer.addingCategory
  };
};

export default connect(
  mapStateToProps,
  { getUserCategories, addCategory }
)(Categories);
