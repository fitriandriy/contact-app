import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Navigation({ logout, name }) {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add</Link></li>
                <li><button onClick={logout}>{name} | Logout</button></li>
            </ul>
        </nav>
    )
};

Navigation.prototypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default Navigation;
