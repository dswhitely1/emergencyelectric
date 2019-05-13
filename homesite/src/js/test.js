const names = [ 'personalData', 'personalData2', 'employment', 'education', 'references' ];
let states = [
	'AK',
	'AL',
	'AR',
	'AS',
	'AZ',
	'CA',
	'CO',
	'CT',
	'DC',
	'DE',
	'FL',
	'GA',
	'GU',
	'HI',
	'IA',
	'ID',
	'IL',
	'IN',
	'KS',
	'KY',
	'LA',
	'MA',
	'MD',
	'ME',
	'MI',
	'MN',
	'MO',
	'MS',
	'MT',
	'NC',
	'ND',
	'NE',
	'NH',
	'NJ',
	'NM',
	'NV',
	'NY',
	'OH',
	'OK',
	'OR',
	'PA',
	'PR',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VA',
	'VI',
	'VT',
	'WA',
	'WI',
	'WV',
	'WY',
];
const toCamelCase = str => {
	return str
		.toLowerCase()
		.replace(/[\W_]+(.)/g, letter => {
			return letter.toUpperCase();
		})
		.split(/[\W_]+(.)/g)
		.join('');
};
const giveMeTypes = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(`FETCH_${names[i].toUpperCase()}_DATA:"FETCH_${names[i].toUpperCase()}_DATA",`);
	}
};

const giveMeActions = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(
			`case '${names[i]}': dispatch({type: C.FETCH_${names[i].toUpperCase()}_DATA, payload: { ${names[
				i
			]}: resp}});break;`,
		);
	}
};

const giveMeReducers = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(
			`case C.FETCH_${names[i].toUpperCase()}_DATA: return {...state, ${names[i]}: action.payload.${names[i]}}`,
		);
	}
};
const giveMeActionPayload = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(`${names[i]}: action.payload.${names[i]},`);
	}
};
const giveMeConstants = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(`const ${toCamelCase(names[i])} = "${names[i]}";`);
	}
};

const giveMeStateOptions = () => {
	for (let i = 0; i < states.length; i++) {
		console.log(`<option value="${states[i]}">${states[i]}</option>`);
	}
};

console.log(giveMeTypes());
console.log(giveMeActions());
console.log(giveMeReducers());
console.log(giveMeActionPayload());
console.log(giveMeConstants());
giveMeStateOptions();
