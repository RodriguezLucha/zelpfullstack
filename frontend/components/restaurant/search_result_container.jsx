import {connect} from 'react-redux';
import SearchResult from './search_result';
import {selectAllRestaurants} from '../../reducers/selectors';
import {fetchRestaurants} from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  restaurants: selectAllRestaurants(state),
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
