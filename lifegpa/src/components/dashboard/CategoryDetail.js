import React from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

const CategoryDetail = props => {

    return (
        <div className="details-category">
            {/* <Link to={`/details`}> */}
            <h3>{props.category.name}</h3>
            <p>{props.category.gpa}</p>
            {/* </Link> */}
        </div>
    );
};


const mapStateToProps = state => ({
    // habit: state.dashboardReducer.habit
});

export default connect(
    mapStateToProps, {}
    // { getHabit }
)(CategoryDetail);