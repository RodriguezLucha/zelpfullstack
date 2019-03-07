import React from 'react';
import Home from './home';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import {Route} from 'react-router-dom';
import TopRestaurantsContainer from './top_restaurants/top_restaurant_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import SearchResultContainer from './restaurant/search_result_container';
import Footer from './footer';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={TopRestaurantsContainer} />
    <Route exact path="/restaurant/:id" component={RestaurantShowContainer} />
    <Route exact path="/search" component={SearchResultContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Footer/>
  </div>
);

export default App;