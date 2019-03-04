import {connect} from 'react-redux';
import TopRestaurants from './top_restaurants';
import {fetchRestaurants} from '../../actions/restaurant_actions';
import {selectAllRestaurants} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  restaurants: selectAllRestaurants(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRestaurants);
