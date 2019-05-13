import C from '../actions/types';

const INITIAL_STATE = {
	validated : false,
	firstName : '',
	lastName  : '',
	email     : '',
	subject   : '',
	message   : '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case C.CONTACT_FORM_VALIDATION:
			return {
				...state,
				validated : action.payload.validated,
				res       : action.payload.res,
			};
		case C.RESET_CONTACT_FORM:
			return {
				...state,
				validated : action.payload.validated,
				firstName : action.payload.firstName,
				lastName  : action.payload.lastName,
				email     : action.payload.email,
				subject   : action.payload.subject,
				message   : action.payload.message,
			};
		case C.CONTACT_FORM_VALUE_CHANGE_FN:
			return { ...state, firstName: action.payload.firstName };
		case C.CONTACT_FORM_VALUE_CHANGE_LN:
			return { ...state, lastName: action.payload.lastName };
		case C.CONTACT_FORM_VALUE_CHANGE_EM:
			return { ...state, email: action.payload.email };
		case C.CONTACT_FORM_VALUE_CHANGE_SU:
			return { ...state, subject: action.payload.subject };
		case C.CONTACT_FORM_VALUE_CHANGE_MG:
			return { ...state, message: action.payload.message };
		default:
			return state;
	}
};
