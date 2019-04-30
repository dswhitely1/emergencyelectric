import C from '../actions/types';

const INITIAL_STATE = {
	formValidation    : false,
	parentid          : null,
	companyName       : '',
	companyPhone      : '',
	companyCitySt     : '',
	companySupervisor : '',
	startDate         : '',
	endDate           : '',
	reasonLeaving     : '',
	contactYes        : false,
	contactNo         : false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case C.EMPLOYMENT_FORM_CLEAR:
			return {
				...state,
				companyName       : action.payload.companyName,
				companyPhone      : action.payload.companyPhone,
				companyCitySt     : action.payload.companyCitySt,
				companySupervisor : action.payload.companySupervisor,
				startDate         : action.payload.startDate,
				endDate           : action.payload.endDate,
				reasonLeaving     : action.payload.reasonLeaving,
				contactYes        : action.payload.contactYes,
				contactNo         : action.payload.contactNo,
			};
		case C.UPDATE_EMPLOYMENT_APP_ID:
			return { ...state, parentid: action.payload.parentid };
		case C.EMPLOYMENT_FORM_VALIDATION:
			return { ...state, formValidation: action.payload.formValidation };
		case C.UPDATE_COMPANYNAME_CHANGE:
			return { ...state, companyName: action.payload.companyName };
		case C.UPDATE_COMPANYPHONE_CHANGE:
			return { ...state, companyPhone: action.payload.companyPhone };
		case C.UPDATE_COMPANYCITYST_CHANGE:
			return { ...state, companyCitySt: action.payload.companyCitySt };
		case C.UPDATE_COMPANYSUPERVISOR_CHANGE:
			return { ...state, companySupervisor: action.payload.companySupervisor };
		case C.UPDATE_STARTDATE_CHANGE:
			return { ...state, startDate: action.payload.startDate };
		case C.UPDATE_ENDDATE_CHANGE:
			return { ...state, endDate: action.payload.endDate };
		case C.UPDATE_REASONLEAVING_CHANGE:
			return { ...state, reasonLeaving: action.payload.reasonLeaving };
		case C.UPDATE_CONTACTYES_CHANGE:
			return {
				...state,
				contactYes : action.payload.contactYes,
				contactNo  : !action.payload.contactYes,
			};
		case C.UPDATE_CONTACTNO_CHANGE:
			return {
				...state,
				contactNo  : action.payload.contactNo,
				contactYes : !action.payload.contactNo,
			};

		default:
			return state;
	}
};
