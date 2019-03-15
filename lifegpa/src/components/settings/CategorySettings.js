import React, { Component } from "react";
import { CirclePicker } from "react-color";
import CategoryList from "../onboarding/CategoryList";
import { Link } from "react-router-dom";
import { getUserCategories, addCategory, deleteCategory } from "../../actions";
import { connect } from "react-redux";
import "../onboarding/Categories.css";

export class CategorySettings extends Component {
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
        <h2>Edit Your Categories</h2>
        <div className="new-category">
          {this.props.category.map((category, index) => (
            <CategoryList
              key={index}
              category={category}
              handleDeleteCategory={this.handleDeleteCategory}
            />
          ))}
        </div>
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
          <button>Add Category</button>
        </form>
        <div className="category-continue">
          <Link to="/settings/habits">
            <button className="continue">Continue</button>
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
)(CategorySettings);
