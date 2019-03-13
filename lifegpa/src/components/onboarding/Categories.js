import React, { Component } from "react";
import { CirclePicker } from "react-color";
import { getUserCategories } from "../../actions";
import { connect } from "react-redux";
import "./Categories.css";

export class Categories extends Component {
  state = {
    categoryTitle: "",
    color: "",
    userId: ""
  };

  componentDidMount() {
    this.props.getUserCategories(this.props.id);
  }

  handleCategoryChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeComplete = color => {
    this.setState({ color: color.hex });
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
          <CirclePicker
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
    users: state.userCategoryReducer.users
  };
};

export default connect(
  mapStateToProps,
  { getUserCategories }
)(Categories);
