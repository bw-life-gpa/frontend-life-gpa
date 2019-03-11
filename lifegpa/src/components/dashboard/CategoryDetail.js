import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { circleCreator } from '../../actions';

class CategoryDetail extends Component {
    

    componentDidMount() {
        // Set the state to the currently selected category
        let reducedCategory = this.props.category.filter(e => this.props.match.params.name === e.name);
        this.setState({category: reducedCategory[0]});
    }

    render() {

    if (this.state === null) {
        return (
            <div>Loading...</div>
        )
    } else {
        console.log(this.state)
    return (
        <div className="details-category">
            {this.props.circleCreator(this.state.category.gpa, this.state.category.color, this.state.category.name)}       
        </div>
    );}
    }
};


const mapStateToProps = state => ({
    // habit: state.dashboardReducer.habit
    category: state.dashboardReducer.categories
});

export default connect(
    mapStateToProps,
     { circleCreator }
)(CategoryDetail);