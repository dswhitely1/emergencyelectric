class FormDataRows {
	constructor(attributes) {
		this.type = attributes.type;
		this.name = attributes.name;
		this.width = attributes.width;
		this.require = attributes.require;
	}
	toCamelCase() {
		return this.name
			.toLowerCase()
			.replace(/[\W_]+(.)/g, letter => {
				return letter.toUpperCase();
			})
			.split(/[\W_]+(.)/g)
			.join('');
	}
	variableName() {
		return `this.props.persData.${this.toCamelCase()}`;
	}
}
const FirstName = new FormDataRows({
	type    : 'text',
	name    : 'First Name',
	width   : '4',
	require : true,
});

const MiddleName = new FormDataRows({
	type    : 'text',
	name    : 'Middle Name',
	width   : '2',
	require : false,
});

const LastName = new FormDataRows({
	type    : 'text',
	name    : 'Last Name',
	width   : '4',
	require : true,
});

const PreferredName = new FormDataRows({
	type    : 'text',
	name    : 'Preferred Name',
	width   : '2',
	require : false,
});
const Address = new FormDataRows({
	type    : 'text',
	name    : 'Address',
	width   : '8',
	require : true,
});
const Apartment = new FormDataRows({
	type    : 'text',
	name    : 'Apartment',
	width   : '4',
	require : false,
});
const City = new FormDataRows({
	type    : 'text',
	name    : 'City',
	width   : '4',
	require : true,
});
const State = new FormDataRows({
	type    : 'text',
	name    : 'State',
	width   : '4',
	require : true,
});
const ZipCode = new FormDataRows({
	type    : 'text',
	name    : 'Zipcode',
	width   : '4',
	require : true,
});
const PhoneNumber = new FormDataRows({
	type    : 'text',
	name    : 'Phone Number',
	width   : '4',
	require : true,
});
const AlternateNumber = new FormDataRows({
	type    : 'text',
	name    : 'Alternate Phone Number',
	width   : '4',
	require : false,
});
const Email = new FormDataRows({
	type    : 'email',
	name    : 'Email Address',
	width   : '4',
	require : true,
});
const Referral = new FormDataRows({
	type    : 'text',
	name    : 'How Did You Hear about us',
	width   : '6',
	require : false,
});
const DesiredPay = new FormDataRows({
	type     : 'text',
	name     : 'Desired Pay',
	width    : '6',
	required : true,
});
const StartDate = new FormDataRows({
	type     : 'text',
	name     : 'When are you able to start work',
	width    : '6',
	required : true,
});
const Position = new FormDataRows({
	type     : 'text',
	name     : 'Position Desired',
	width    : '6',
	required : true,
});

class CheckBoxes extends FormDataRows {
	constructor(attributes) {
		super(attributes);
		this.label = attributes.label;
		this.parent = attributes.parent;
		this.name = `${this.parent} ${this.label}`;
	}
}
const checkBoxDefault = { width: '0', require: false };

const FullTime = new CheckBoxes({
	checkBoxDefault,
	type            : 'checkbox',
	parent          : 'Schedule',
	label           : 'Full Time',
});
const PartTime = new CheckBoxes({
	checkBoxDefault,
	type            : 'checkbox',
	parent          : 'Schedule',
	label           : 'Part Time',
});
const Temporary = new CheckBoxes({
	checkBoxDefault,
	type            : 'checkbox',
	parent          : 'Schedule',
	label           : 'Temporary',
});
const Weekdays = new CheckBoxes({
	checkBoxDefault,
	type            : 'checkbox',
	parent          : 'Shift',
	label           : 'Weekdays',
});
const Weekends = new CheckBoxes({
	checkBoxDefault,
	type            : 'checkbox',
	parent          : 'Shift',
	label           : 'Weekends',
});
const Evenings = new CheckBoxes({
	checkBoxDefault,
	type            : 'checkbox',
	parent          : 'Shift',
	label           : 'Evenings',
});
const Nights = new CheckBoxes({
	checkBoxDefault,
	type            : 'checkbox',
	parent          : 'Shift',
	label           : 'Nights',
});

const AuthYes = new CheckBoxes({
	checkBoxDefault,
	type            : 'radio',
	parent          : 'Auth',
	label           : 'Yes',
});
const AuthNo = new CheckBoxes({
	checkBoxDefault,
	type            : 'radio',
	parent          : 'Auth',
	label           : 'No',
});
const OverYes = new CheckBoxes({
	checkBoxDefault,
	type            : 'radio',
	parent          : 'Over',
	label           : 'Yes',
});
const OverNo = new CheckBoxes({
	checkBoxDefault,
	type            : 'radio',
	parent          : 'Over',
	label           : 'No',
});
const PermitYes = new CheckBoxes({
	checkBoxDefault,
	type            : 'radio',
	parent          : 'Permit',
	label           : 'Yes',
});
const PermitNo = new CheckBoxes({
	checkBoxDefault,
	type            : 'radio',
	parent          : 'Permit',
	label           : 'No',
});

const schedule = [ FullTime, PartTime, Temporary ];
const shift = [ Weekdays, Weekends, Evenings, Nights ];
const auth = [ AuthYes, AuthNo ];
const over = [ OverYes, OverNo ];
const permit = [ PermitYes, PermitNo ];
const personalDataRow1 = [ FirstName, MiddleName, LastName, PreferredName ];
const personalDataRow2 = [ Address, Apartment ];
const personalDataRow3 = [ City, State, ZipCode ];
const personalDataRow4 = [ PhoneNumber, AlternateNumber, Email ];
const personalDataRow5 = [ Referral, DesiredPay ];
const personalDataRow6 = [ StartDate, Position ];
const formPersonalData = [
	personalDataRow1,
	personalDataRow2,
	personalDataRow3,
	personalDataRow4,
];
const formPersonalData2 = [ personalDataRow5, personalDataRow6 ];
const formPersonalQuestion1 = [ schedule, shift ];
const formPersonalQuestion2 = [ auth, over, permit ];
const allData = [
	formPersonalData,
	formPersonalQuestion1,
	formPersonalData2,
	formPersonalQuestion2,
];

console.log(allData);

console.log(allData[0][0][0].toCamelCase());

let variablesId = [];

for (let i = 0; i < allData.length; i++) {
	for (let y = 0; y < allData[i].length; y++) {
		for (let x = 0; x < allData[i][y].length; x++) {
			variablesId = [ ...variablesId, allData[i][y][x].toCamelCase() ];
		}
	}
}

console.log(variablesId);

const actionCreater = calledName => {
	return `UPDATE_${calledName.toUpperCase()}_CHANGE : "UPDATE_${calledName.toUpperCase()}_CHANGE"`;
};

let actions = [];

for (let i = 0; i < allData.length; i++) {
	for (let y = 0; y < allData[i].length; y++) {
		for (let x = 0; x < allData[i][y].length; x++) {
			actions = [ ...actions, actionCreater(allData[i][y][x].toCamelCase()) ];
		}
	}
}

console.log(actions);
