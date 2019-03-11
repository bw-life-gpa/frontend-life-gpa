import React from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { circleCreator } from '../../actions';

const CategoryDetail = props => {

    return (
        <div className="details-category">
            {/* <Link to={`/details`}> */}
            {props.circleCreator(props.category.gpa, props.category.color, props.category.name)}
            {/* </Link> */}

        </div>
    );
};


const mapStateToProps = state => ({
    // habit: state.dashboardReducer.habit
});

export default connect(
    mapStateToProps,
     { circleCreator }
)(CategoryDetail);