import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { circleCreator, getCategoryHabits, getUserCategories, calculateGPA } from '../../actions';

class CategoryDetail extends Component {


    componentDidMount() {
        const categoryID = this.getCategoryID();
        this.props.getUserCategories(this.getUserID())
        this.props.getCategoryHabits(categoryID)

        // console.log("this.props.categories after then", this.props.categories)
        // let reducedCategory = this.props.categories.filter(e => this.state.categoryID == e.id );
        // console.log("reduced category", reducedCategory)
        // this.setState({ reducedCategory: reducedCategory[0] });
        // this.getReducedCategory();
        // this.setState({ reducedCategory: reducedCategory })
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

    //   getReducedCategory = () => {
    //     // const categoryID = this.getCategoryID()
    //     let userCategories = this.props.categories;
    //     console.log("this.props.category FUNC", userCategories);
    //     console.log("this.state.categoryID FUNC", this.props.match.params.id);
    //     let reducedCategory = userCategories.filter(e => parseInt(this.props.match.params.id, 10) == parseInt(e.id, 10) );
    //     // let reducedCategory = this.props.categories.filter(e => console.log("e FUNC", e.id) );
    //     console.log("reducedCategory FUNC", reducedCategory);
    //     this.setState({ reducedCategory: reducedCategory });
    //     // this.setState({ ...this.state, reducedCategory: reducedCategory });
    //     return reducedCategory;
    //   };



    render() {

        if (this.state === null || this.props.habits === []) {
            return (
                <div>Loading...</div>
            )
        } else {
            // console.log(this.state)
            let reducedCategory = this.props.categories.find(e => this.state.categoryID == e.id);
            // console.log("reduced category", reducedCategory)
            return (
                <div className="details-category-wrapper">
                    <div className="details-category-habits">
                        {reducedCategory ? <h2>{reducedCategory.categoryTitle}</h2> : ""}
                        <div className="details-category-circles">
                            {this.props.habits.map(e => {

                                let gpa = this.props.calculateGPA(e.created_at, e.completionPoints);
                                return (
                                    <div key={e.id} className="habit-circle">
                                        {this.props.circleCreator(gpa, reducedCategory.color, e.habitTitle)}
                                    </div>)
                            })}
                        </div>
                    </div>
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