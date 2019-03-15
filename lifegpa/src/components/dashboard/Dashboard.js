import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';

import './Dashboard.css';

import GPA from './GPA';
import { getUserHabits } from '../../actions';


class Dashboard extends Component {

    componentDidMount() {
        this.props.getUserHabits(this.getUserID())
        .then( () => {
            this.setState({ habits: this.props.habits });
        });
        
    };

    getUserID = () => {
        const userID = localStorage.getItem("userID");
        this.setState({ ...this.state, userId: userID });
        return userID;
    };

    calculateLifeGPA = () => {
        let days = 0;
        let now = moment();
        let completionPoints = 0;

        for (let i = 0; i < this.props.habits.length; i++) {

            let habit = this.props.habits[i];
            let a = moment(habit.created_at, "YYYY-MM-DD");
            days += now.diff(a, "days");

            completionPoints += habit.completionPoints;

        }

        let gpa = 0;
        if (days === 0) {
            gpa = 100;
        } else {
            gpa = Math.floor((completionPoints / days) * 100);
        }

        return gpa

    };

    render() {
        if (this.props.habits === null || this.props.habits.length === 0 ) {
            return (
                <div>Loading...</div>
            )
        } else {
        let gpa = this.calculateLifeGPA();
        return (
            <div className="dashboard">
                <h2 className="dashboard-header">lifeGPA</h2>
                <GPA gpa={gpa} />

                <Link to={`/details`}> <button className="dashboard-button">GPA Details</button> </Link>
                
                <Link to={`/daily`}> <button className="dashboard-button">Begin Daily Report</button> </Link>
                <Link to={`/settings`}> <button className="dashboard-button">Settings</button></Link>
            </div>
        );
    }}
}

const mapStateToProps = state => ({

    habits: state.habitsReducer.habits

});

export default connect(
  mapStateToProps,
  { getUserHabits }
)(Dashboard);

