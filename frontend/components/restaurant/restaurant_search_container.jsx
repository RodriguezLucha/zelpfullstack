import {connect} from 'react-redux';
import ResturantSearch from './restaurant_search';
import {searchRestaurants} from '../../actions/restaurant_actions';
import {selectAllRestaurants} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  restaurants: selectAllRestaurants(state)
});

const mapDispatchToProps = dispatch => ({
  searchRestaurants: (category) => dispatch(searchRestaurants(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantSearch);
