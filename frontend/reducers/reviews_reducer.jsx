import {RECEIVE_RESTAURANT} from '../actions/restaurant_actions';
import {RECEIVE_REVIEW, DELETE_REVIEW} from '../actions/review_actions';

import merge from 'lodash/merge';

const restaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = null;
  switch (action.type) {
  case RECEIVE_RESTAURANT:
    return merge({}, state, action.payload.reviews);
  case RECEIVE_REVIEW:
    return merge({}, state, {[action.payload.review.id]: action.payload.review});
  case DELETE_REVIEW:
    newState = merge({}, state);
    newState.delete[action.payload.review.id];
    return merge({}, state, {[action.payload.review.id]: action.payload.review});
  default:
    return state;
  }
};

export default restaurantReducer;
