import {RECEIVE_RESTAURANT} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const restaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_RESTAURANT:
    return merge({}, state, action.payload.reviews);
  default:
    return state;
  }
};

export default restaurantReducer;
