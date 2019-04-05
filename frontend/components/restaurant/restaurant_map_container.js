import {connect} from 'react-redux';
import {selectAllRestaurants} from '../../reducers/selectors';
import ResturantMap from './restaurant_map';

const mapStateToProps = (state) => ({
  restaurants: selectAllRestaurants(state),
});

export default connect(mapStateToProps)(ResturantMap);
