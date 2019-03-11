import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import './Dashboard.css';

import GPA from './GPA';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GPA: [],
        };
    }

    componentDidMount() {
        // this.props.getGPA();
    }

    render() {
        return (
            <div className="dashboard">
                <GPA />

                <Link to={`/details`}> <button className="dashboard-button">Details</button> </Link>
                
            </div>
        );
    }
}

// export default Dashboard;
const mapStateToProps = state => ({
    // GPA: state.dashboardReducer.GPA
});

export default connect(
  mapStateToProps, {}
//   { getGPA }
)(Dashboard);