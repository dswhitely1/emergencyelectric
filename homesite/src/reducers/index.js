import { combineReducers } from 'redux';

import formReducer from './formReducer';

export default combineReducers({ formContact: formReducer });
