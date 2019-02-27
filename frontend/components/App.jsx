import React from 'react';
import Home from './home';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import Footer from './footer';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Footer/>
  </div>
);

export default App;