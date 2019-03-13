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
export const USER_CATEGORY_REQUEST = "USER_CATEGORY_REQUEST";
export const USER_CATEGORY_SUCCESS = "USER_CATEGORY_SUCCESS";
export const USER_CATEGORY_FAILURE = "USER_CATEGORY_FAILURE";
export const ADD_CATEGORY_REQUEST = "USER_CATEGORY_REQUEST";
export const ADD_CATEGORY_SUCCESS = "USER_CATEGORY_SUCCESS";
export const ADD_CATEGORY_FAILURE = "USER_CATEGORY_FAILURE";
export const TOGGLE_DAILY = "TOGGLE_DAILY";
export const CREATE_CIRCLE = "CREATE_CIRCLE";
export const CALCULATE_GPA = "CALCULATE_GPA";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://lifegpa.herokuapp.com/api/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("authorization", res.data.token);
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
  dispatch({ type: ADD_CATEGORY_REQUEST });
  return axiosWithAuth()
    .get(`https://lifegpa.herokuapp.com/api/users/categories/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: USER_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: USER_CATEGORY_FAILURE,
        payload: err.response.data.message
      });
    });
};

export const addCategory = newCategory => dispatch => {
  dispatch({ type: ADD_CATEGORY_REQUEST });
  return axiosWithAuth()
    .post(`https://lifegpa.herokuapp.com/api/users/categories`, newCategory)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADD_CATEGORY_FAILURE,
        payload: err.response.data.message
      });
    });
};

// Ability to create SVG circle. Pass in the GPA, Color of the ring, and the Title
export const circleCreator = (gpa, color, title) => dispatch => {
  dispatch({ type: CREATE_CIRCLE });
  const gpaNum = parseInt(gpa, 10);
  const dashArray = `${gpaNum},100`;

  return (
    <div>
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

export const toggleDaily = (id, yn) => dispatch => {
  dispatch({ type: TOGGLE_DAILY });
  return <div>toggle</div>;
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

  return (
    <div>
      {/* <div>Days: {days}</div>
        <div>Points: {completionPoints}</div>
        <div>GPA: {gpa}%</div> */}
      {gpa}
    </div>
  );
};
