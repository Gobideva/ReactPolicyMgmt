import React, { Component } from 'react';
import HomeLayout from './HomeLayout';
import Policy from '../Policy/Policy';

class Home extends Component {
  render() {
    return (
      <div>
       <HomeLayout/> 
        <Policy/>
      </div>
     
    );
  }
}

export default Home;
