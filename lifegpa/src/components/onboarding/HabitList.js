import React, { Component } from "react";
import { getUserCategories, getUserHabits, updateHabit } from "../../actions";
import { connect } from "react-redux";
import "./Habits.css";

export class HabitList extends Component {
  state = {
    habitTitle: "",
    isEditing: false
  };

  toggleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  handleEditChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateHabit = (e, id) => {
    e.preventDefault();

    const updatedHabit = {
      habitTitle: this.state.habitTitle
    };

    this.props.updateHabit(id, updatedHabit);

    this.setState({
      habitTitle: ""
    });

    this.toggleEdit();
    this.props.getUserHabits(this.getUserID());
  };

  getUserID = () => {
    const userID = localStorage.getItem("userID");
    return userID;
  };

  render() {
    if (this.state.isEditing === false) {
      return (
        <div className="habit-added" style={{ border: `2px solid black` }}>
          <p className="habit">{this.props.habit.habitTitle} </p>
          <div className="buttons">
            <button className="edit-button" onClick={this.toggleEdit}>
              Edit
            </button>
            <span
              className="delete"
              onClick={e => this.props.handleDeleteHabit(e, this.props.id)}
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
            onSubmit={e => this.handleUpdateHabit(e, this.props.habit.id)}
          >
            <input
              type="text"
              name="habitTitle"
              value={this.state.habitTitle}
              placeholder="Edit Habit"
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
    category: state.userCategoryReducer.category,
    habits: state.habitsReducer.habits,
    updatingHabit: state.habitsReducer.updatingHabit
  };
};

export default connect(
  mapStateToProps,
  { getUserCategories, getUserHabits, updateHabit }
)(HabitList);
