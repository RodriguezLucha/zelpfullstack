import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const SET_DEMO_USER = 'SET_DEMO_USER';
export const CLEAR_DEMO_USER = 'CLEAR_DEMO_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const setDemoUser = () => ({
  type: SET_DEMO_USER,
});

export const clearDemoUser = () => ({
  type: CLEAR_DEMO_USER,
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const loginDemoUser = (history) => dispatch => {
  history.push('/login');
  dispatch(setDemoUser());
};

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);
