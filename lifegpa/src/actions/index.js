import axios from "axios";
import React from "react";
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
export const TOGGLE_DAILY = "TOGGLE_DAILY";
export const CREATE_CIRCLE = "CREATE_CIRCLE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("http://localhost:4444/api/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("authorization", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      //getDashboard();
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
    .post("http://localhost:4444/api/register", newUser)
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
    .get(`http://localhost:4444/api/users/categories/${id}`)
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
