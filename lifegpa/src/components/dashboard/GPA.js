import React from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// import * as d3 from 'd3'
import { circleCreator } from '../../actions';


//const GPA = props => {
class GPA extends React.Component {
    componentDidMount() {
        this.props.circleCreator();
    } 
    render(){
    return (
        <div className="GPA">
            {/* <Link to={`/details`}> */}
           <h3>Life GPA</h3>
           {this.props.circleCreator(this.props.GPA, '#ffec26', 'LifeGPA')}
        </div>
    )}
};


const mapStateToProps = state => ({
    GPA: state.dashboardReducer.GPA
});

export default connect(
    mapStateToProps,
    { circleCreator }
)(GPA);