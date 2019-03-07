import {connect} from 'react-redux';
import {fetchSingleRestaurant} from '../../actions/restaurant_actions';
import ResturantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => {
  const singleRestaurant = state.entities.restaurants[ownProps.match.params.id];
  const singleRestaurantReview = state.entities.reviews;
  return ({ singleRestaurant, singleRestaurantReview});
};

const mapDispatchToProps = dispatch => ({
  fetchSingleRestaurant: (id) => dispatch(fetchSingleRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantShow);
