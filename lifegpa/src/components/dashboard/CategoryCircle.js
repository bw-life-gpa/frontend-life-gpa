import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { circleCreator } from '../../actions';

class CategoryCircle extends Component {

    render() {
    return (
        
        <div className="category-circle">
            {this.props.circleCreator(this.props.gpa, this.props.category.color, this.props.category.categoryTitle)}
            <Link to={`/details/${this.props.category.id}`}> 
                <button className="details-button">{`${this.props.category.categoryTitle} GPA`}</button> 
            </Link>
            
        </div>
    );}
};

export default connect(
    null,
     { circleCreator }
)(CategoryCircle);