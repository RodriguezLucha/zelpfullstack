import {connect} from 'react-redux';
import SearchResult from './search_result';
import {selectAllRestaurants} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  restaurants: selectAllRestaurants(state)
});

export default connect(mapStateToProps)(SearchResult);
