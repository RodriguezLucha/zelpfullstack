import {connect} from 'react-redux';
import {fetchSingleRestaurant, searchRestaurants} from '../../actions/restaurant_actions';
import ResturantShow from './restaurant_show';
import {deleteReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const singleRestaurant = state.entities.restaurants[ownProps.match.params.id];
  const reviews = state.entities.reviews;
  const users = state.entities.users;
  const loggedInUserId = state.session.id;
  return ({singleRestaurant, reviews, users, loggedInUserId});
};

const mapDispatchToProps = dispatch => ({
  fetchSingleRestaurant: (id) => dispatch(fetchSingleRestaurant(id)),
  searchRestaurants: (term) => dispatch(searchRestaurants(term)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantShow);
