import {connect} from 'react-redux';
import {signup, receiveClearSessionErrors} from '../../../actions/session_actions';
import SignupForm from './signup';

const mapStateToProps = ({errors}) => ({
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(receiveClearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
