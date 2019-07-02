import React from 'react';
import Home from './home';

import LoginFormContainer from './session/login/login_container';
import SignupFormContainer from './session/signup/signup_container';
import './session/session.scss';
import {AuthRoute} from '../util/route_util';
import {Route} from 'react-router-dom';
import TopRestaurantsContainer from './top_restaurants/top_restaurant_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import RestaurantReviewContainer from './restaurant/restaurant_review_container';
import SearchResultContainer from './restaurant/search_result_container';
import Footer from './common/footer/footer';

const App = () => (
  <div>
    <Route
      component={Home}
      exact
      path="/" />
    <Route
      component={TopRestaurantsContainer}
      exact
      path="/" />
    <Route
      component={RestaurantShowContainer}
      exact
      path="/restaurant/:id" />
    <Route
      component={RestaurantReviewContainer}
      exact
      path="/restaurant/:id/review" />
    <Route
      component={SearchResultContainer}
      exact
      path="/search" />
    <AuthRoute
      component={LoginFormContainer}
      exact
      path="/login" />
    <AuthRoute
      component={SignupFormContainer}
      exact
      path="/signup" />
    <Route component={Footer} />
  </div>
);

export default App;