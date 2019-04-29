import C from '../actions/types';

const INITIAL_STATE = {
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
		default:
			return state;
	}
};
