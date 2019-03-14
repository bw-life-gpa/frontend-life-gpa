import React, { Component } from 'react';
import { connect } from "react-redux";

import './Dashboard.css';
import CategoryCircle from './CategoryCircle';

import { getUserCategories } from '../../actions';

class Details extends Component {

    componentDidMount() {
        this.props.getUserCategories(this.getUserID());
      }
    
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
        return (
            <div className="details">
                <h3> Details </h3>
                {this.props.categories.map(e => (<CategoryCircle category={e} key={e.name}/> ))}
            </div>
        );
    }
}

// export default Dashboard;
const mapStateToProps = state => ({
    categories: state.userCategoryReducer.category
});

export default connect(
  mapStateToProps,
  { getUserCategories }
)(Details);

