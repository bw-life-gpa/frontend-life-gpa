import axios from "axios";
import React from "react";
import axiosWithAuth from "../components/axiosWithAuth";

//Login action creators

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const CREATE_CIRCLE = "CREATE_CIRCLE";

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

// Ability to create SVG circle. Pass in the GPA, Color of the ring, and the Title
export const circleCreator = (gpa, color, title ) => dispatch => {
    dispatch({ type: CREATE_CIRCLE });
    const gpaNum = parseInt(gpa, 10);
    const gpaRemainder = 100-gpaNum;
    const circleString = `${gpaNum} ${gpaRemainder}` ;

    return (
    <div>
        {<svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
        
                <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" 
                    fill="transparent" stroke={color} strokeWidth="3" 
                    strokeDasharray={circleString}
                    strokeDashoffset="25"></circle>
                <g className="gpa-text">
                    <text x="50%" y="50%" className="chart-label">{title}</text>
                    <text x="50%" y="50%" className="chart-number">{gpaNum}%</text>
                </g>
        </svg>}
    </div>);
  };
  