import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { circleCreator } from '../../actions';

class CategoryDetail extends Component {


    componentDidMount() {
        // Set the state to the currently selected category
        let reducedCategory = this.props.category.filter(e => this.props.match.params.categoryTitle === e.categoryTitle);
        this.setState({ category: reducedCategory[0] });

        // TO BE FIXED once the get habits by category endpoint is created
        // let reducedHabits = this.props.habits.filter(e => reducedCategory[0].categoryTitle === e.category);
        // this.setState({ habits: reducedHabits[0] });
        // this.setState({ habits: [] });

        // this.props.habits.map(e => {
        //     console.log(`outside: ${e}`);
        //     if (reducedCategory[0].categoryTitle === e.category) {
        //         console.log(`inside: ${e}`);
        //         this.setState({
        //             habits: [...this.state.habits, e]
        //         })
        //     }
        // })
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
                    {this.props.circleCreator(this.state.category.gpa, this.state.category.color, this.state.category.categoryTitle)}
                    <div className="details-category-habits">

                    </div>
                </div>
            );
        }
    }
};


const mapStateToProps = state => ({
    habits: state.dashboardReducer.habits,
    category: state.dashboardReducer.categories
});

export default connect(
    mapStateToProps,
    { circleCreator }
)(CategoryDetail);
