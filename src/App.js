import React, { Component } from 'react';
import Footer from './common/Footer';

import { Route} from 'react-router-dom';
import Login  from './components/Login/Login';
import UserRegistration from './components/UserRegistration/UserRegistration';
import Layout from './common/Layout';
import Home from './components/Home/Home';
import ProfileUpdate  from './components/ProfileUpdate/ProfileUpdate';

class App extends Component {
  render() {
    return (
      <div>
       <Layout/> 
      <Route path="/" exact component={Login} />
      <Route path="/Home"  component={Home} />
      <Route path="/Registration"  component={UserRegistration} />
      <Route path="/UpdateProfile"  component={ProfileUpdate} />
       <Footer/> 
      </div>
    );
  }
}

export default App;
