import {connect} from 'react-redux';
import TopRestaurants from './top_restaurants';
import {fetchRestaurants} from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  restaurants: state.entities.restaurants
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRestaurants);
