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
        // const userID = localStorage.getItem("userID")
        // this.setstate( id: localStorage.getItem("userID"));
        const userHabits = this.props.getUserHabits(this.getUserID());
        // const userHabits = this.props.getUserHabits(userID);
        this.setState({ habits: userHabits });
        
        // let reducedCategory = this.props.category.filter(e => this.props.match.params.categoryTitle === e.categoryTitle);
        // this.setState({ category: reducedCategory[0] });
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
    // habits: state.habitsReducer.habits
});

export default connect(
    mapStateToProps, 
    { getUserHabits }
)(Daily);

