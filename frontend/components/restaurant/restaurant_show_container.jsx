import {connect} from 'react-redux';
import { fetchSingleRestaurant, searchRestaurants} from '../../actions/restaurant_actions';
import ResturantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => {
  const singleRestaurant = state.entities.restaurants[ownProps.match.params.id];
  const reviews = state.entities.reviews;
  const users = state.entities.users;
  return ({singleRestaurant, reviews, users});
};

const mapDispatchToProps = dispatch => ({
  fetchSingleRestaurant: (id) => dispatch(fetchSingleRestaurant(id)),
  searchRestaurants: (term) => dispatch(searchRestaurants(term))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantShow);
