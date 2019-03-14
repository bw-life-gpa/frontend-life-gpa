import axios from "axios";
import React from "react";
import moment from "moment";
import axiosWithAuth from "../components/axiosWithAuth";

//Login action creators
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// Get user category
export const USER_CATEGORY_REQUEST = "USER_CATEGORY_REQUEST";
export const USER_CATEGORY_SUCCESS = "USER_CATEGORY_SUCCESS";
export const USER_CATEGORY_FAILURE = "USER_CATEGORY_FAILURE";

// Add a user category
export const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";

// Delete a user category
export const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_FAILURE";

// Update a user category
export const UPDATE_CATEGORY_REQUEST = "UPDATE_CATEGORY_REQUEST";
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_FAILURE = "UPDATE_CATEGORY_FAILURE";

// Get all habits by category
export const GET_HABITS_BY_CATEGORY_REQUEST = "GET_HABITS_BY_CATEGORY_REQUEST";
export const GET_HABITS_BY_CATEGORY_SUCCESS = "GET_HABITS_BY_CATEGORY_SUCCESS";
export const GET_HABITS_BY_CATEGORY_FAILURE = "GET_HABITS_BY_CATEGORY_FAILURE";

// Update habit for daily report
export const TOGGLING = "TOGGLING";
export const TOGGLING_SUCCESS = "TOGGLING_SUCCESS";
export const TOGGLING_FAILURE = "TOGGLING_FAILURE";

//Get a user habits
export const USER_HABIT_REQUEST = "USER_HABIT_REQUEST";
export const USER_HABIT_SUCCESS = "USER_HABIT_SUCCESS";
export const USER_HABIT_FAILURE = "USER_HABIT_FAILURE";

// Add a user habit
export const ADD_HABIT_REQUEST = "ADD_HABIT_REQUEST";
export const ADD_HABIT_SUCCESS = "ADD_HABIT_SUCCESS";
export const ADD_HABIT_FAILURE = "ADD_HABIT_FAILURE";

// Delete a user habit
export const DELETE_HABIT_REQUEST = "DELETE_HABIT_REQUEST";
export const DELETE_HABIT_SUCCESS = "DELETE_HABIT_SUCCESS";
export const DELETE_HABIT_FAILURE = "DELETE_HABIT_FAILURE";

// Update a user habit
export const UPDATE_HABIT_REQUEST = "UPDATE_HABIT_REQUEST";
export const UPDATE_HABIT_SUCCESS = "UPDATE_HABIT_SUCCESS";
export const UPDATE_HABIT_FAILURE = "UPDATE_HABIT_FAILURE";

export const CREATE_CIRCLE = "CREATE_CIRCLE";
export const CALCULATE_GPA = "CALCULATE_GPA";
export const CALCULATE_CATEGORY_GPA = "CALCULATE_CATEGORY_GPA";


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://lifegpa.herokuapp.com/api/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("authorization", res.data.token);
      localStorage.setItem("userID", res.data.user.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user.id });
    })
    .catch(err => {
      console.log(err.response.data.message);
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};

//Register action creators
export const register = newUser => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://lifegpa.herokuapp.com/api/register", newUser)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response });
    });
};

export const getUserCategories = id => dispatch => {
  dispatch({ type: USER_CATEGORY_REQUEST });
  return axiosWithAuth()
    .get(`https://lifegpa.herokuapp.com/api/users/categories/${id}`)
    .then(res => {
      console.log(res.data[0].category);
      dispatch({ type: USER_CATEGORY_SUCCESS, payload: res.data[0].category });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: USER_CATEGORY_FAILURE,
        payload: err
      });
    });
};

export const addCategory = newCategory => dispatch => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  return axiosWithAuth()
    .post(`https://lifegpa.herokuapp.com/api/categories`, newCategory)
    .then(res => {
      console.log("From Action add category", res.data);
      dispatch({ type: ADD_CATEGORY_SUCCESS, payload: res.data.categories });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADD_CATEGORY_FAILURE,
        payload: err
      });
    });
};

export const deleteCategory = id => dispatch => {
  dispatch({ type: DELETE_CATEGORY_REQUEST });
  return axiosWithAuth()
    .delete(`https://lifegpa.herokuapp.com/api/categories/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_CATEGORY_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_CATEGORY_FAILURE, payload: err.response });
    });
};

export const updateCategory = (id, updatedCategory) => dispatch => {
  return axiosWithAuth()
    .put(`https://lifegpa.herokuapp.com/api/categories/${id}`, updatedCategory)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_CATEGORY_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: UPDATE_CATEGORY_FAILURE, payload: err.response });
    });
};

// Get all habits by category
export const getCategoryHabits = id => dispatch => {
  dispatch({ type: GET_HABITS_BY_CATEGORY_REQUEST });
  return axiosWithAuth()
    .get(`https://lifegpa.herokuapp.com/api/categories/habits/${id}`)
    .then(res => {
      console.log(res.data[0].habits);
      dispatch({ type: GET_HABITS_BY_CATEGORY_SUCCESS, payload: res.data[0].habits });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_HABITS_BY_CATEGORY_FAILURE,
        payload: err
      });
    });
};

export const getUserHabits = id => dispatch => {
  dispatch({ type: USER_HABIT_REQUEST });
  return axiosWithAuth()
    .get(`https://lifegpa.herokuapp.com/api/users/habits/${id}`)
    .then(res => {
      console.log(res.data[0].habits);
      dispatch({ type: USER_HABIT_SUCCESS, payload: res.data[0].habits });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: USER_HABIT_FAILURE,
        payload: err.response.data.message
      });
    });
};

export const addHabit = newHabit => dispatch => {
  dispatch({ type: ADD_HABIT_REQUEST });
  return axiosWithAuth()
    .post(`https://lifegpa.herokuapp.com/api/habits`, newHabit)
    .then(res => {
      console.log("From Action add habit", res.data);
      dispatch({ type: ADD_HABIT_SUCCESS, payload: res.data.habit });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADD_HABIT_FAILURE,
        payload: err
      });
    });
};

export const deleteHabit = id => dispatch => {
  dispatch({ type: DELETE_HABIT_REQUEST });
  return axiosWithAuth()
    .delete(`https://lifegpa.herokuapp.com/api/habits/${id}`)
    .then(res => {
      console.log("From delete action", res.data);
      dispatch({ type: DELETE_HABIT_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: DELETE_HABIT_FAILURE, payload: err.response });
    });
};

export const updateHabit = (id, updatedHabit) => dispatch => {
  dispatch({ type: UPDATE_HABIT_REQUEST });
  return axiosWithAuth()
    .put(`https://lifegpa.herokuapp.com/api/habits/${id}`, updatedHabit)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: UPDATE_HABIT_SUCCESS,
        payload: res.data.updated.habitTitle
      });
    })
    .catch(err => {
      dispatch({ type: UPDATE_HABIT_FAILURE, payload: err.response });
    });
};

// Ability to create SVG circle. Pass in the GPA, Color of the ring, and the Title
export const circleCreator = (gpa, color, title) => dispatch => {
  dispatch({ type: CREATE_CIRCLE });
  const gpaNum = parseInt(gpa, 10);
  const dashArray = `${gpaNum},100`;

  return (
    <div className="circle">
      {
        <svg
          width="100%"
          height="100%"
          className="circle-chart"
          viewBox="0 0 42 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle-chart-background"
            stroke="#efefef"
            strokeWidth="3"
            fill="none"
            cx="21"
            cy="21"
            r="15.91549431"
          />
          <circle
            className="circle-chart-circle"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={dashArray}
            strokeLinecap="round"
            fill="none"
            cx="21"
            cy="21"
            r="15.91549431"
          />
          <g className="gpa-text">
            <text x="50%" y="50%" className="chart-label">
              {title}
            </text>
            <text x="50%" y="50%" className="chart-number">
              {gpaNum}%
            </text>
          </g>
        </svg>
      }
    </div>
  );
};

export const toggleDaily = (id, updatedHabit) => dispatch => {
  // To update a habit as completed need to:
  // increment completionPoints
  // updatedHabit.completionPoints += 1

  // id, completed, completionPoints
  dispatch({ type: TOGGLING });
  return axiosWithAuth()
    .put(`https://lifegpa.herokuapp.com/api/habits/${id}`, updatedHabit)
    .then(res => {
      console.log(res);
      dispatch({
        type: TOGGLING_SUCCESS,
        payload: { ...res.data.updated, id }
      });
    })
    .catch(err => {
      dispatch({ type: TOGGLING_FAILURE, payload: err.response });
    });
};

// calculate GPA of a single item
export const calculateGPA = (created_at, completionPoints) => dispatch => {
  // To calculate the GPA:
  // Take the number of "completionPoints" and
  // divide by the number of days between "TODAY" and "created_at"

  // created_at: 2019-04-02 06:37:44
  // YYYY-MM-DD

  dispatch({ type: CALCULATE_GPA });

  let a = moment(created_at, "YYYY-MM-DD");
  let now = moment();
  let days = now.diff(a, "days");

  let gpa = 0;

  if (days === 0) {
    gpa = 100;
  } else {
    gpa = Math.floor((completionPoints / days) * 100);
  }

  return gpa
  
};
