const names = [ 'schoolName', 'subject', 'graduate', 'degree' ];
const giveMeTypes = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(
			`UPDATE_${names[i].toUpperCase()}_CHANGE:"UPDATE_${names[
				i
			].toUpperCase()}_CHANGE",`,
		);
	}
};

const giveMeActions = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(
			`case '${names[i]}': return {type: C.UPDATE_${names[
				i
			].toUpperCase()}_CHANGE, payload: { ${names[i]}: value}}`,
		);
	}
};

const giveMeReducers = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(
			`case C.UPDATE_${names[
				i
			].toUpperCase()}_CHANGE: return {...state, ${names[
				i
			]}: action.payload.${names[i]}}`,
		);
	}
};
const giveMeActionPayload = () => {
	for (let i = 0; i < names.length; i++) {
		console.log(`${names[i]}: action.payload.${names[i]},`);
	}
};
console.log(giveMeTypes());
console.log(giveMeActions());
console.log(giveMeReducers());
console.log(giveMeActionPayload());
