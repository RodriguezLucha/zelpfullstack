import SearchNav from './search_nav';
import {connect} from 'react-redux';
import {logout, loginDemoUser} from '../../../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginDemoUser: (history) => dispatch(loginDemoUser(history))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchNav));
