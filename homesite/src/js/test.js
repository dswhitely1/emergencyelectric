const names = [ 'personalData', 'personalData2', 'employment', 'education', 'references' ];
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

console.log(giveMeTypes());
console.log(giveMeActions());
console.log(giveMeReducers());
console.log(giveMeActionPayload());
console.log(giveMeConstants());
