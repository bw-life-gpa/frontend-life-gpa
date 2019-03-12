import axios from "axios";
import React from "react";
import axiosWithAuth from "../components/axiosWithAuth";

//Login action creators
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const CREATE_CIRCLE = "CREATE_CIRCLE";
export const TOGGLE_DAILY = "TOGGLE_DAILY";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";


export const login = creds => dispatch => {

  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("http://localhost:5000/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
      //getDashboard();
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

//Register action creators
export const register = newUser => dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post("http://localhost:5000/register", newUser)
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response });
    });
};

// Ability to create SVG circle. Pass in the GPA, Color of the ring, and the Title
export const circleCreator = (gpa, color, title ) => dispatch => {
    dispatch({ type: CREATE_CIRCLE });
    const gpaNum = parseInt(gpa, 10);
    const dashArray = `${gpaNum},100`

    return (
    <div>
        {<svg width="100%" height="100%" className="circle-chart" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
            <circle className="circle-chart-background" stroke="#efefef" strokeWidth="3" fill="none" cx="21" cy="21" r="15.91549431" />
            <circle className="circle-chart-circle" stroke={color} strokeWidth="3" strokeDasharray={dashArray} strokeLinecap="round" fill="none" cx="21" cy="21" r="15.91549431" />
            <g className="gpa-text">
                <text x="50%" y="50%" className="chart-label">{title}</text>
                <text x="50%" y="50%" className="chart-number">{gpaNum}%</text>
            </g>
        </svg>}
    </div>);
  };
  

export const toggleDaily = (id, yn ) => dispatch => {
    dispatch({ type: TOGGLE_DAILY });

    return (
      <div>toggle</div>
    );
  };

