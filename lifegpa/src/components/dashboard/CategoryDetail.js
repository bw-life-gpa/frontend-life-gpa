import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { circleCreator, getCategoryHabits, getUserCategories, calculateGPA } from '../../actions';

class CategoryDetail extends Component {


    componentDidMount() {
        const categoryID = this.getCategoryID();
        this.props.getUserCategories(this.getUserID())
        this.props.getCategoryHabits(categoryID)
    }

    getUserID = () => {
        const userID = localStorage.getItem("userID");
        this.setState({ ...this.state, userId: userID });
        return userID;
    };

    getCategoryID = () => {
        const categoryID = this.props.match.params.id;
        this.setState({ ...this.state, categoryID: categoryID });
        return categoryID;
    };



    render() {

        if (this.state === null || this.props.habits === []) {
            return (
                <div>Loading...</div>
            )
        } else {
            let reducedCategory = this.props.categories.find(e => parseInt(this.state.categoryID) === parseInt(e.id));
            return (
                <div className="details-category-wrapper">
                    <div className="details-category-habits">
                        {reducedCategory ? <h2>{(reducedCategory.categoryTitle).toLowerCase()}GPA</h2> : ""}
                        <div className="details-category-circles">
                            {this.props.habits.map(e => {

                                let gpa = this.props.calculateGPA(e.created_at, e.completionPoints);
                                return (
                                    <div key={e.id} className="habit-circle">
                                        {this.props.circleCreator(gpa, reducedCategory.color, "")}
                                        {e.habitTitle}
                                    </div>)
                            })}
                        </div>
                    </div>
                    <Link to={`/details`}> <button className="dashboard-button">Category Details</button> </Link>
                </div>
            );
        }
    }
};


const mapStateToProps = state => ({
    habits: state.userCategoryReducer.habits,
    // category: state.dashboardReducer.categories
    categories: state.userCategoryReducer.category
});

export default connect(
    mapStateToProps,
    { circleCreator, getCategoryHabits, getUserCategories, calculateGPA }
)(CategoryDetail);