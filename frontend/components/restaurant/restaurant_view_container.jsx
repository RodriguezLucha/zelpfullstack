import { connect } from 'react-redux';
//import { login, clearDemoUser, receiveClearSessionErrors } from '../../actions/session_actions';
import ResturantView from './restaurant_view';

const mapStateToProps = (state) => ({
  //errors: errors.session,
  //demoLoginSet: ui.demo
});

const mapDispatchToProps = dispatch => ({
//  clearSessionErrors: () => dispatch(receiveClearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResturantView);
