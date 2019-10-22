import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">Explore Seekers</a></div>
            <div className="spacer"/>
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Comments</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Sign Up</a></li>

                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;