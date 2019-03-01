import {SET_DEMO_USER, CLEAR_DEMO_USER} from '../actions/session_actions';


const uiReducer = (state = {demo: false}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case SET_DEMO_USER:
    return {demo:true};
  case CLEAR_DEMO_USER:
    return {demo:false};
  default:
    return state;
  }
};

export default uiReducer;
