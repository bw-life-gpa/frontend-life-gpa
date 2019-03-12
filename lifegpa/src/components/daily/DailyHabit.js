import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { circleCreator } from '../../actions';

const DailyHabit = props => {

    return (
        <div className="daily-habit">
            <div className="daily-habit-name">{props.habit.habitTitle}</div>
            <div className="daily-habit-buttons">
            <button className="daily-habit-yes">Yes</button>
            <button className="daily-habit-no">No</button>
            </div>
        </div>
    );
};


const mapStateToProps = state => ({
    // habit: state.dashboardReducer.habit
});

export default connect(
    mapStateToProps,
     {  }
)(DailyHabit);