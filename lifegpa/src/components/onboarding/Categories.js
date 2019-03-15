import React, { Component } from "react";
import { CirclePicker } from "react-color";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";
import { getUserCategories, addCategory, deleteCategory } from "../../actions";
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

  handleDeleteCategory = (e, id) => {
    e.preventDefault();

    this.props.deleteCategory(id);
    this.props.getUserCategories(this.getUserID());
  };

  render() {
    return (
      <div className="categories">
        <h2>Choose Your Categories</h2>
        <p>
          <b>Step 1: </b>Add as many categories as you want, use the list below
          as a motivator!
        </p>
        <ul>
          <li>Health</li>
          <li>Physical Fitness</li>
          <li>Studying</li>
          <li>Work Efficiency</li>
        </ul>
        <div className="new-category">
          {this.props.category.map((category, index) => (
            <CategoryList
              key={index}
              category={category}
              handleDeleteCategory={this.handleDeleteCategory}
            />
          ))}
        </div>
        <p>
          <b>Step 2: </b>When adding a category, make sure to write a short
          category title and select a color.
        </p>
        <form className="category-form" onSubmit={this.handleAddCategory}>
          <input
            className="add-category"
            type="text"
            name="categoryTitle"
            value={this.state.categoryTitle}
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
          <button className="add-category">Add Category</button>
        </form>
        <div className="step-3">
          <p>
            <b>Step 3: </b>After you have added all your categories, continue onto
            choosing your habits.
          </p>
          <Link to="/onboarding/habits">
            <button className="continue">Continue to Habits</button>
          </Link>
        </div>
 
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
  { getUserCategories, addCategory, deleteCategory }
)(Categories);
