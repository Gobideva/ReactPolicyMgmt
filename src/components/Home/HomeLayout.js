import React, { Component } from 'react';
import Aux from '../../common/Auxiliary';
import HomeHeader from './HomeHeader';

class HomeLayout extends Component {
    render() {
        return (
            <Aux>
                <HomeHeader/>
                <main style={homeStyle}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const homeStyle = {
    marginTop:"72px"
  };


export default HomeLayout;