// frontend/reducers/entities_reducer.jsx

import {combineReducers} from 'redux';

import usersReducer from './users_reducer';
import restaurantReducer from './restaurant_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;