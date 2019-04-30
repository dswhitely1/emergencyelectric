import C from '../actions/types';

const INITIAL_STATE = {
	formValidation : false,
	schoolName     : '',
	subject        : '',
	graduate       : '',
	degree         : '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case C.UPDATE_SCHOOLNAME_CHANGE:
			return { ...state, schoolName: action.payload.schoolName };
		case C.UPDATE_SUBJECT_CHANGE:
			return { ...state, subject: action.payload.subject };
		case C.UPDATE_GRADUATE_CHANGE:
			return { ...state, graduate: action.payload.graduate };
		case C.UPDATE_DEGREE_CHANGE:
			return { ...state, degree: action.payload.degree };
		default:
			return state;
	}
};
