import {connect} from 'react-redux';
import {login, clearDemoUser, receiveClearSessionErrors} from '../../../actions/session_actions';
import LoginForm from './login';

const mapStateToProps = ({errors, ui}) => ({
  errors: errors.session,
  demoLoginSet: ui.demo
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearDemoUser: () => dispatch(clearDemoUser()),
  clearSessionErrors: () => dispatch(receiveClearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
