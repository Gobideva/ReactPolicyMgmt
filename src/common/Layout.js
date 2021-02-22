import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from './UI/Toolbar/Toolbar';
import Aux from './Auxiliary';

class Layout extends Component {

    render () {
        return (
                <Aux>
                <Toolbar/>
                  <main className={classes.Content}>
                    {this.props.children}
                </main>
                </Aux>
            
        )
    }
}

export default Layout;