import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactFormReducer from './contactFormReducer';
import messageReducer from './messageReducer';
import applicationPageReducer from './applicationPageReducer';
import personalDataReducer from './personalDataReducer';
import employmentReducer from './employmentReducer';
import educationReducer from './educationReducer';
import referenceReducer from './referenceReducer';
import applicationDisplayReducer from './applicationDisplayReducer';
import messageListReducer from './messageListReducer';
import applicationListReducer from './applicationListReducer';
import adminPageReducer from './adminPageReducer';

export default combineReducers({
	form               : formReducer,
	formContact        : contactFormReducer,
	messageDisplay     : messageReducer,
	applicationPage    : applicationPageReducer,
	personalData       : personalDataReducer,
	employmentInfo     : employmentReducer,
	educationInfo      : educationReducer,
	references         : referenceReducer,
	applicationDisplay : applicationDisplayReducer,
	messageList        : messageListReducer,
	applicationList    : applicationListReducer,
	adminPage          : adminPageReducer,
});
