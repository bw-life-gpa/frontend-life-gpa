import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function header(props) {
    return (
        <div className="header">
            <div className="left">
                <Link to={`/`}>
                    <h2>Life GPA</h2>
                </Link>
            </div>
            <div className="right">
                <Link to={`/register`}>
                    <p>Register</p>
                </Link>
                <Link to={`/login`}>
                    <p>Login</p>
                </Link>
            </div>
        </div>
    )
};


export default header;