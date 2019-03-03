import React from 'react';
import Home from './home';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import {Route} from 'react-router-dom';
import TopRestaurantsContainer from './top_restaurants/top_restaurant_container';
import RestaurantViewContainer from './restaurant/restaurant_view_container';
import Footer from './footer';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={TopRestaurantsContainer} />
    <Route exact path="/restaurant/:id" component={RestaurantViewContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Footer/>
  </div>
);

export default App;