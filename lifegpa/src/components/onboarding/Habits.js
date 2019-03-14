import React, { Component } from "react";
import {
  getUserCategories,
  addHabit,
  getUserHabits,
  deleteHabit
} from "../../actions";
import { Link } from "react-router-dom";
import HabitList from "./HabitList";
import { connect } from "react-redux";
import "./Habits.css";

export class Habits extends Component {
  state = {
    habitTitle: "",
    categoryId: "",
    dropDownCategoryId: "",
    categories: ""
  };

  componentDidMount() {
    this.props.getUserCategories(this.getUserID());
    this.props.getUserHabits(this.getUserID());
  }

  getUserID = () => {
    const userID = localStorage.getItem("userID");
    return userID;
  };

  handleHabitChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddHabit = e => {
    e.preventDefault();

    const newHabit = {
      habitTitle: this.state.habitTitle,
      categoryId: this.state.categoryId,
      completed: false,
      completionPoints: 0,
      created_at: Date.now()
    };

    this.props.addHabit(newHabit);

    this.setState({
      habitTitle: ""
    });
  };

  handleDeleteHabit = (e, id) => {
    e.preventDefault();

    this.props.deleteHabit(id);
    this.props.getUserHabits(this.getUserID());
  };

  render() {
    if (this.props.addingCategory) {
      console.log("loading", this.props.category);
      return <div>Loading...</div>;
    }

    return (
      <div className="onboard-habits">
        <h1>Choose Your Habits</h1>
        <p>Create the habits that you want to complete on a daily basis!</p>
        <div className="new-habit">
          {this.props.habits.map((habit, index) => (
            <HabitList
              key={index}
              habit={habit}
              handleDeleteHabit={this.handleDeleteHabit}
              id={habit.id}
            />
          ))}
        </div>
        <form onSubmit={this.handleAddHabit}>
          <input
            className="add-habit"
            type="text"
            name="habitTitle"
            value={this.state.habitTitle}
            onChange={this.handleHabitChanges}
            placeholder="Enter Habit"
            autoComplete="off"
            required
          />
          <select
            value={this.state.categoryId}
            onChange={this.handleHabitChanges}
            name="categoryId"
          >
            <option value="">Category</option>
            {this.props.category.map(category => (
              <option key={category.id} value={category.id}>
                {category.categoryTitle}
              </option>
            ))}
          </select>
          <button className="habit-button">Add Habit</button>
        </form>
        <Link to="/dashboard">
          <button>Finish</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.loginReducer.id,
    category: state.userCategoryReducer.category,
    habits: state.habitsReducer.habits,
    addingHabit: state.habitsReducer.addingHabit
  };
};

export default connect(
  mapStateToProps,
  { getUserCategories, getUserHabits, addHabit, deleteHabit }
)(Habits);
