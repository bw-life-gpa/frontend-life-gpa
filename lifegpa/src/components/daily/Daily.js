import React, { Component } from 'react';
import { connect } from "react-redux";

import './Daily.css';

import DailyHabit from './DailyHabit';
import { getUserHabits } from '../../actions';


class Daily extends Component {
    state = {
        habits: [],
        color: "",
        userId: null
      };

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

    render() {
        if (this.props.fetchingCategories) {
            return (
                <div>Loading...</div>
            )
        }
        else {
        return (
            <div className="daily">
                <h2> Daily Report </h2>
                {(this.state.habits.length === 0 || this.state.habits.length === null || this.state.habits.length === undefined) 
                    ? <div>You do not have any habits, please go add them.</div>
                    : this.props.habits.map(e => (<DailyHabit habit={e} key={e.name}/> ))}
            </div>
        );}
    }
}

// export default Dashboard;
const mapStateToProps = state => ({
    habits: state.habitsReducer.habits
});

export default connect(
    mapStateToProps, 
    { getUserHabits }
)(Daily);

