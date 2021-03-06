import {connect} from 'react-redux';
import {createReview, editReview} from '../../actions/review_actions';
import {fetchSingleRestaurant, receiveClearBackendErrors} from '../../actions/restaurant_actions';
import ResturantReview from './restaurant_review';
import {selectUserReview} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const singleRestaurant = state.entities.restaurants[ownProps.match.params.id];
  const reviews = state.entities.reviews;
  const users = state.entities.users;
  const userId = state.session.id;
  const errors = state.errors.backend;
  const loggedInUserReview = selectUserReview(userId, singleRestaurant, reviews);
  return ({singleRestaurant, reviews, users, loggedInUserReview, errors});
};

const mapDispatchToProps = dispatch => ({
  fetchSingleRestaurant: (id) => dispatch(fetchSingleRestaurant(id)),
  createReview: (review) => dispatch(createReview(review)),
  editReview: (reviewId, review) => dispatch(editReview(reviewId, review)),
  clearBackendErrors: () => dispatch(receiveClearBackendErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantReview);
