import C from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case C.FETCH_PERSONALDATA_DATA:
			return { ...state, personalData: action.payload.personalData };
		case C.FETCH_PERSONALDATA2_DATA:
			return { ...state, personalData2: action.payload.personalData2 };
		case C.FETCH_EMPLOYMENT_DATA:
			return { ...state, employment: action.payload.employment };
		case C.FETCH_EDUCATION_DATA:
			return { ...state, education: action.payload.education };
		case C.FETCH_REFERENCES_DATA:
			return { ...state, references: action.payload.references };
		default:
			return state;
	}
};
