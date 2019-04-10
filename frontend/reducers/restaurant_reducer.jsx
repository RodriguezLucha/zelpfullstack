import {RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT} from '../actions/restaurant_actions';
import {DELETE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const restaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;
  switch (action.type) {
  case RECEIVE_RESTAURANTS:
    return action.payload;
  case RECEIVE_RESTAURANT:
    return merge({}, state, {[action.payload.restaurant.id]: action.payload.restaurant});
  case DELETE_REVIEW:
    newState = merge({}, state);
    newState[action.payload.restaurant_id].reviewIds = newState[action.payload.restaurant_id].reviewIds.filter(reviewId => reviewId !== action.payload.id);
    return newState;
  default:
    return state;
  }
};

export default restaurantReducer;
