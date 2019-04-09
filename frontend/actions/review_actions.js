import * as APIUtil from '../util/review_api_utils';
import {receiveErrors} from './restaurant_actions';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const receiveReview = payload => ({
  type: RECEIVE_REVIEW,
  payload
});
export const receiveDeleteReview = payload => ({
  type: RECEIVE_REVIEW,
  payload
});

export const createReview = (review) => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
export const editReview = (reviewId, review) => dispatch => (
  APIUtil.createReview(reviewId, review).then(review => (
    dispatch(receiveReview(review))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteReview = (reviewId) => dispatch => (
  APIUtil.deleteReview(reviewId).then(review => (
    dispatch(receiveDeleteReview(review))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);