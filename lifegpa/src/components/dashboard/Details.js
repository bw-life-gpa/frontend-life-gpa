import React, { Component } from 'react';
import { connect } from "react-redux";

import './Dashboard.css';

import CategoryDetail from './CategoryDetail';


class Details extends Component {


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
            <div className="details">
                <h3> Details </h3>
                {this.props.categories.map(e => (<CategoryDetail category={e} key={e.name}/> ))}
            </div>
        );
    }
}

// export default Dashboard;
const mapStateToProps = state => ({
    categories: state.dashboardReducer.categories
});

export default connect(
  mapStateToProps, {}
//   { getCategories }
)(Details);