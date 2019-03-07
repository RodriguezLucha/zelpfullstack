import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_BACKEND_ERRORS = 'RECEIVE_BACKEND_ERRORS';
export const CLEAR_BACKEND_ERRORS = 'CLEAR_BACKEND_ERRORS';

export const receiveRestaurants = payload => ({
  type: RECEIVE_RESTAURANTS,
  payload
});
export const receiveRestaurant = payload => ({
  type: RECEIVE_RESTAURANT,
  payload
});

export const receiveErrors = errors => ({
  type: RECEIVE_BACKEND_ERRORS,
  errors
});

export const receiveClearBackendErrors = () => ({
  type: CLEAR_BACKEND_ERRORS
});

export const fetchRestaurants = () => dispatch => (
  APIUtil.fetchAll().then(restaurants => (
    dispatch(receiveRestaurants(restaurants))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const searchRestaurants = term => dispatch => (
  APIUtil.searchAll(term).then(
    restaurants => (
      dispatch(receiveRestaurants(restaurants))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    )
  )
);

export const fetchSingleRestaurant = (id) => dispatch => (
  APIUtil.fetchSingleRestaurant(id).then(restaurant => (
    dispatch(receiveRestaurant(restaurant))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);