import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { circleCreator } from '../../actions';

const CategoryCircle = props => {

    return (
        <div className="category-circle">
            {props.circleCreator(props.category.gpa, props.category.color, props.category.name)}
            <Link to={`/details/${props.category.name}`}> 
                <button className="details-button">Details</button> 
            </Link>
           

        </div>
    );
};


const mapStateToProps = state => ({
    // habit: state.dashboardReducer.habit
});

export default connect(
    mapStateToProps,
     { circleCreator }
)(CategoryCircle);