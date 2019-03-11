import React from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

const GPA = props => {

    return (
        <div className="GPA">
            {/* <Link to={`/details`}> */}
            <h3>Life GPA</h3>
            <p>{props.GPA}</p>
            {/* </Link> */}
        </div>
    );
};


// GPA.defaultProps = {
//     gpa: '50%',
// };


const mapStateToProps = state => ({
    GPA: state.dashboardReducer.GPA
});

export default connect(
    mapStateToProps,
    {}
)(GPA);