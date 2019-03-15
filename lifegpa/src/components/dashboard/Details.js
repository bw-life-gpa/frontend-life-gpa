import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';

import './Dashboard.css';
import CategoryCircle from './CategoryCircle';

import { getUserCategories, getUserHabits } from '../../actions';

class Details extends Component {

    componentDidMount() {
        this.props.getUserCategories(this.getUserID());
        this.props.getUserHabits(this.getUserID());
    }

    getUserID = () => {
        const userID = localStorage.getItem("userID");
        this.setState({ ...this.state, userId: userID });
        return userID;
    };

    calculateCategoryGPA = (categoryID) => {
        // filter on all habits from a user

        let days = 0;
        let now = moment();
        let completionPoints = 0;

        for (let i = 0; i < this.props.habits.length; i++) {

            let habit = this.props.habits[i];
            if (habit.categoryId === categoryID) {
                let a = moment(habit.created_at, "YYYY-MM-DD");
                days += now.diff(a, "days");
                completionPoints += habit.completionPoints;
            }
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
        if (this.props.fetchingCategories) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div className="details">
                <div className="details-header">
                    <h2 className="dashboard-header">categoryGPA</h2>
                </div>
                
                <div className="details-body">
                {this.props.categories.map(e => {
                    let gpa = this.calculateCategoryGPA(e.id);

                    return <CategoryCircle category={e} key={e.name} gpa={gpa} />
                })}
                </div>
                <Link to={`/dashboard`}> <button className="dashboard-button">Dashboard</button> </Link>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    categories: state.userCategoryReducer.category,
    habits: state.habitsReducer.habits
});

export default connect(
    mapStateToProps,
    { getUserCategories, getUserHabits }
)(Details);

