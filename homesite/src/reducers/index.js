import { combineReducers } from 'redux';

import formReducer from './formReducer';
import messageReducer from './messageReducer';
import applicationPageReducer from './applicationPageReducer';

export default combineReducers({
	formContact     : formReducer,
	messageDisplay  : messageReducer,
	applicationPage : applicationPageReducer,
});
