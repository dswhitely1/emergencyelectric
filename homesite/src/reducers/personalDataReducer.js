import C from '../actions/types';

const INITIAL_STATE = {
	formValidate              : false,
	firstName                 : '',
	middleName                : '',
	lastName                  : '',
	preferredName             : '',
	address                   : '',
	apartment                 : '',
	city                      : '',
	state                     : '',
	zipcode                   : '',
	phoneNumber               : '',
	alternatePhoneNumber      : '',
	emailAddress              : '',
	scheduleFullTime          : false,
	schedulePartTime          : false,
	scheduleTemporary         : false,
	shiftWeekdays             : false,
	shiftWeekends             : false,
	shiftEvenings             : false,
	shiftNights               : false,
	howDidYouHearAboutUs      : '',
	desiredPay                : '',
	whenAreYouAbleToStartWork : '',
	positionDesired           : '',
	authYes                   : false,
	authNo                    : false,
	overYes                   : false,
	overNo                    : false,
	permitYes                 : false,
	permitNo                  : false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case C.PERSONAL_DATA_FORM_VALIDATION:
			return { ...state, formValidate: action.payload.formValidate };
		case C.UPDATE_FIRSTNAME_CHANGE:
			return { ...state, firstName: action.payload.firstName };
		case C.UPDATE_MIDDLENAME_CHANGE:
			return { ...state, middleName: action.payload.middleName };
		case C.UPDATE_LASTNAME_CHANGE:
			return { ...state, lastName: action.payload.lastName };
		case C.UPDATE_PREFERREDNAME_CHANGE:
			return { ...state, preferredName: action.payload.preferredName };
		case C.UPDATE_ADDRESS_CHANGE:
			return { ...state, address: action.payload.address };
		case C.UPDATE_APARTMENT_CHANGE:
			return { ...state, apartment: action.payload.apartment };
		case C.UPDATE_CITY_CHANGE:
			return { ...state, city: action.payload.city };
		case C.UPDATE_STATE_CHANGE:
			return { ...state, state: action.payload.state };
		case C.UPDATE_ZIPCODE_CHANGE:
			return { ...state, zipcode: action.payload.zipcode };
		case C.UPDATE_PHONENUMBER_CHANGE:
			return { ...state, phoneNumber: action.payload.phoneNumber };
		case C.UPDATE_ALTERNATEPHONENUMBER_CHANGE:
			return {
				...state,
				alternatePhoneNumber : action.payload.alternatePhoneNumber,
			};
		case C.UPDATE_EMAILADDRESS_CHANGE:
			return { ...state, emailAddress: action.payload.emailAddress };
		case C.UPDATE_SCHEDULEFULLTIME_CHANGE:
			return { ...state, scheduleFullTime: action.payload.scheduleFullTime };
		case C.UPDATE_SCHEDULEPARTTIME_CHANGE:
			return { ...state, schedulePartTime: action.payload.schedulePartTime };
		case C.UPDATE_SCHEDULETEMPORARY_CHANGE:
			return { ...state, scheduleTemporary: action.payload.scheduleTemporary };
		case C.UPDATE_SHIFTWEEKDAYS_CHANGE:
			return { ...state, shiftWeekdays: action.payload.shiftWeekdays };
		case C.UPDATE_SHIFTWEEKENDS_CHANGE:
			return { ...state, shiftWeekends: action.payload.shiftWeekends };
		case C.UPDATE_SHIFTEVENINGS_CHANGE:
			return { ...state, shiftEvenings: action.payload.shiftEvenings };
		case C.UPDATE_SHIFTNIGHTS_CHANGE:
			return { ...state, shiftNights: action.payload.shiftNights };
		case C.UPDATE_HOWDIDYOUHEARABOUTUS_CHANGE:
			return {
				...state,
				howDidYouHearAboutUs : action.payload.howDidYouHearAboutUs,
			};
		case C.UPDATE_DESIREDPAY_CHANGE:
			return { ...state, desiredPay: action.payload.desiredPay };
		case C.UPDATE_WHENAREYOUABLETOSTARTWORK_CHANGE:
			return {
				...state,
				whenAreYouAbleToStartWork : action.payload.whenAreYouAbleToStartWork,
			};
		case C.UPDATE_POSITIONDESIRED_CHANGE:
			return { ...state, positionDesired: action.payload.positionDesired };
		case C.UPDATE_AUTHYES_CHANGE:
			return {
				...state,
				authYes : action.payload.authYes,
				authNo  : !action.payload.authYes,
			};
		case C.UPDATE_AUTHNO_CHANGE:
			return {
				...state,
				authNo  : action.payload.authNo,
				authYes : !action.payload.authNo,
			};
		case C.UPDATE_OVERYES_CHANGE:
			return {
				...state,
				overYes : action.payload.overYes,
				overNo  : !action.payload.overYes,
			};
		case C.UPDATE_OVERNO_CHANGE:
			return {
				...state,
				overNo    : action.payload.overNo,
				overYes   : !action.payload.overNo,
				permitYes : false,
				permitNo  : false,
			};
		case C.UPDATE_PERMITYES_CHANGE:
			return {
				...state,
				overYes   : true,
				overNo    : false,
				permitYes : action.payload.permitYes,
				permitNo  : !action.payload.permitYes,
			};
		case C.UPDATE_PERMITNO_CHANGE:
			return {
				...state,
				overYes   : true,
				overNo    : false,
				permitYes : !action.payload.permitNo,
				permitNo  : action.payload.permitNo,
			};
		default:
			return state;
	}
};
