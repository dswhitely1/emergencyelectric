import { combineReducers } from 'redux';

import formReducer from './formReducer';
import messageReducer from './messageReducer';
import applicationPageReducer from './applicationPageReducer';
import personalDataReducer from './personalDataReducer';

export default combineReducers({
	formContact     : formReducer,
	messageDisplay  : messageReducer,
	applicationPage : applicationPageReducer,
	personalData    : personalDataReducer,
});
