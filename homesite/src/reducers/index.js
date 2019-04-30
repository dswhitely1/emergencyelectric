import { combineReducers } from 'redux';

import formReducer from './formReducer';
import messageReducer from './messageReducer';
import applicationPageReducer from './applicationPageReducer';
import personalDataReducer from './personalDataReducer';
import employmentReducer from './employmentReducer';

export default combineReducers({
	formContact     : formReducer,
	messageDisplay  : messageReducer,
	applicationPage : applicationPageReducer,
	personalData    : personalDataReducer,
	employmentInfo  : employmentReducer,
});
