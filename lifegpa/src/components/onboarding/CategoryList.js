import React, { Component } from "react";
import { getUserCategories, updateCategory } from "../../actions";
import { connect } from "react-redux";
import "./Categories.css";

export class CategoryList extends Component {
  state = {
    categoryTitle: "",
    isEditing: false
  };

  toggleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  handleEditChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateCategory = (e, id) => {
    e.preventDefault();

    const updatedCategory = {
      categoryTitle: this.state.categoryTitle
    };

    this.props.updateCategory(id, updatedCategory);

    this.setState({
      categoryTitle: ""
    });

    this.toggleEdit();
    this.props.getUserCategories(this.getUserID());
  };

  getUserID = () => {
    const userID = localStorage.getItem("userID");
    return userID;
  };

  render() {
    if (this.state.isEditing === false) {
      return (
        <div
          className="category-added"
          style={{ borderBottom: `1px solid ${this.props.category.color}` }}
        >
          <p
            className="category-text"
            style={{
              color: this.props.category.color
            }}
          >
            {this.props.category.categoryTitle}
          </p>
          <div className="buttons">
            <button className="edit-button" onClick={this.toggleEdit}>
              Edit
            </button>
            <span
              className="delete"
              onClick={e =>
                this.props.handleDeleteCategory(e, this.props.category.id)
              }
            >
              X
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="edit-form">
          <form
            className="edit-box"
            onSubmit={e => this.handleUpdateCategory(e, this.props.category.id)}
          >
            <input
              type="text"
              name="categoryTitle"
              value={this.state.categoryTitle}
              placeholder="Edit Category"
              onChange={this.handleEditChanges}
              autoComplete="off"
              required
            />
            <button className="submit-btn">Submit</button>
          </form>
          <button className="cancel-btn" onClick={this.toggleEdit}>
            Cancel
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    updatingCategory: state.userCategoryReducer.updatingCategory
  };
};

export default connect(
  mapStateToProps,
  { getUserCategories, updateCategory }
)(CategoryList);
