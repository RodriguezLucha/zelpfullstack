import {
  combineReducers
} from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import backendErrorsReducer from './backend_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  backend: backendErrorsReducer
});

export default errorsReducer;