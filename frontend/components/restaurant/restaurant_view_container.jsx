import {connect} from 'react-redux';
import {fetchSingleRestaurant} from '../../actions/restaurant_actions';
import ResturantView from './restaurant_view';

const mapStateToProps = (state, ownProps) => {
  const singleRestaurant = state.entities.restaurants[ownProps.match.params.id];
  return ({singleRestaurant});
};

const mapDispatchToProps = dispatch => ({
  fetchSingleRestaurant: (id) => dispatch(fetchSingleRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantView);
