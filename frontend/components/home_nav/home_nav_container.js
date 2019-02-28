import Greeting from './home_nav';
import {connect} from 'react-redux';
import {logout, loginDemoUser} from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginDemoUser: () => dispatch(loginDemoUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
