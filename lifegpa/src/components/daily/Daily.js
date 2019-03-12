import React, { Component } from 'react';
import { connect } from "react-redux";

import './Daily.css';

import DailyHabit from './DailyHabit';


class Daily extends Component {


    componentDidMount() {
        // this.props.getCategories();
    }

    render() {
        if (this.props.fetchingCategories) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div className="daily">
                <h2> Daily Report </h2>
                {this.props.habits.map(e => (<DailyHabit habit={e} key={e.name}/> ))}
            </div>
        );
    }
}

// export default Dashboard;
const mapStateToProps = state => ({
    habits: state.dashboardReducer.habits
});

export default connect(
  mapStateToProps, {}
//   { getHabits }
)(Daily);