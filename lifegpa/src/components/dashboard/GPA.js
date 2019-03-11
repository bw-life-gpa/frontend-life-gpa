import React from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import * as d3 from 'd3'


const GPA = props => {
    const gpaNum = parseInt(props.GPA, 10)
    const gpaRemainder = 100-gpaNum
    const circleString = `${gpaNum} ${gpaRemainder}` 
    return (
        <div className="GPA">
            {/* <Link to={`/details`}> */}
            {/* <h3>Life GPA</h3>
            <p>{props.GPA}</p> */}
            
        {<svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
            <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
            <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
    
            <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" 
                fill="transparent" stroke="#ffec26" strokeWidth="3" 
                strokeDasharray={circleString}
                strokeDashoffset="25"></circle>
            <g className="gpa-text">
                <text x="50%" y="50%" className="chart-label">LifeGPA</text>
                <text x="50%" y="50%" className="chart-number">{gpaNum}%</text>
            </g>
        </svg>}
            {/* </Link> */}
        </div>
    );
};


const mapStateToProps = state => ({
    GPA: state.dashboardReducer.GPA
});

export default connect(
    mapStateToProps,
    {}
)(GPA);