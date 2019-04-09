import {connect} from 'react-redux';
import {createReview, editReview} from '../../actions/review_actions';
import {fetchSingleRestaurant} from '../../actions/restaurant_actions';
import ResturantReview from './restaurant_review';

const mapStateToProps = (state, ownProps) => {
  const singleRestaurant = state.entities.restaurants[ownProps.match.params.id];
  const reviews = state.entities.reviews;
  const users = state.entities.users;
  return ({singleRestaurant, reviews, users});
};

const mapDispatchToProps = dispatch => ({
  fetchSingleRestaurant: (id) => dispatch(fetchSingleRestaurant(id)),
  createReview: (review) => dispatch(createReview(review)),
  editReview: (reviewId, review) => dispatch(editReview(reviewId, review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantReview);
