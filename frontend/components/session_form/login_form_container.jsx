import {connect} from 'react-redux';
import {login, clearDemoUser} from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({errors, ui}) => ({
  errors: errors.session,
  demoLoginSet: ui.demo
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearDemoUser: () => dispatch(clearDemoUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
