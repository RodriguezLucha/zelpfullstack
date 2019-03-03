import {
  RECEIVE_BACKEND_ERRORS,
  CLEAR_BACKEND_ERRORS,
} from '../actions/restaurant_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_BACKEND_ERRORS:
    return action.errors;
  case CLEAR_BACKEND_ERRORS:
    return [];
  default:
    return state;
  }
};
