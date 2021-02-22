import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationList.css';

const NavigationList = ( props ) => (
    <li className={classes.NavigationList}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default NavigationList;