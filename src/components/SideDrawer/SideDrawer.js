import React from 'react';
import  './SideDrawer.css';

const SideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Comments</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/">Sign Up</a></li>
        </ul>
    </nav>
);

export default SideDrawer;
