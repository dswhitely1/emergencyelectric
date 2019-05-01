import C from '../actions/types';

const INITIAL_STATE = {
	formValidation : false,
	name           : '',
	relationship   : '',
	years          : '',
	phone          : '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case C.UPDATE_NAME_CHANGE:
			return { ...state, name: action.payload.name };
		case C.UPDATE_RELATIONSHIP_CHANGE:
			return { ...state, relationship: action.payload.relationship };
		case C.UPDATE_YEARS_CHANGE:
			return { ...state, years: action.payload.years };
		case C.UPDATE_PHONE_CHANGE:
			return { ...state, phone: action.payload.phone };
		case C.REFERENCE_FORM_CLEAR:
			return {
				...state,
				formValidation : action.payload.formValidation,
				name           : action.payload.name,
				relationship   : action.payload.relationship,
				years          : action.payload.years,
				phone          : action.payload.phone,
			};
		case C.REFERENCE_FORM_VALIDATION:
			return { ...state, formValidation: action.payload.formValidation };
		default:
			return state;
	}
};
