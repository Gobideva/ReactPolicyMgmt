import React from 'react';
import classes from '../../common/UI/Toolbar/Toolbar.css';
import NavigationItem from '../Navigation/NavigationItem';

const HomeHeader = ( props ) => (
    <header className={classes.Toolbar}>
        <div>
        <h2 style={headerStyle}>POLICY MANAGEMENT APPLICATION</h2>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItem />
        </nav>
    </header>
);

const headerStyle = {
    color: "white",
    backgroundColor: "#333",
    padding: "10px",
    fontFamily: "Arial"
  };

export default HomeHeader;