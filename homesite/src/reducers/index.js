import { combineReducers } from 'redux';

import formReducer from './formReducer';
import messageReducer from './messageReducer';

export default combineReducers({
	formContact: formReducer,
	messageDisplay: messageReducer,
});
