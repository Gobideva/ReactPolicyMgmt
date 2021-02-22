import React from 'react';

import classes from './NavigationItem.css';
import NavigationList from './NavigationList';

const navigationItem = ( props ) => (
    <ul className={classes.NavigationItem}>
        <NavigationList link="/Home" exact>POLICY</NavigationList>
        <NavigationList link="/UpdateProfile" exact>PROFILE UPDATE</NavigationList>
        <NavigationList link="/" exact>SIGN OUT</NavigationList>
     </ul>
);

export default navigationItem;

