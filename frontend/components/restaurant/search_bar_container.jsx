import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {searchRestaurants} from '../../actions/restaurant_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  searchRestaurants: (term) => dispatch(searchRestaurants(term))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
