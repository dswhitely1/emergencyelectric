const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const router = express.Router();
const db = knex(knexConfig.development);

router.post('/persdata1', (req, res) => {
	const message = req.body;
	let personalData1 = {
		firstName  : message.firstName,
		middleName : message.middleName,
		lastName   : message.lastName,
		prefName   : message.preferredName,
		address1   : message.address,
		address2   : message.apartment,
		city       : message.city,
		state      : message.state,
		zipCode    : message.zipcode,
		phone      : message.phoneNumber,
		altPhone   : message.alternatePhoneNumber,
		email      : message.emailAddress,
	};
	let personalData2 = {
		fullTime      : message.scheduleFullTime,
		partTime      : message.schedulePartTime,
		temporary     : message.scheduleTemporary,
		weekdays      : message.shiftWeekdays,
		weekends      : message.shiftWeekends,
		evenings      : message.shiftEvenings,
		nights        : message.shiftNights,
		referred      : message.howDidYouHearAboutUs,
		desiredpay    : message.desiredPay,
		availableDate : message.whenAreYouAbleToStartWork,
		position      : message.positionDesired,
		authYes       : message.authYes,
		authNo        : message.authNo,
		overYes       : message.overYes,
		overNo        : message.overNo,
		permitYes     : message.permitYes,
		permitNo      : message.permitNo,
	};
	db
		.insert(personalData1)
		.into('personalData')
		.then(ids => {
			personalData2 = { ...personalData2, parentId: ids[0] };
			console.log(personalData2);
			db
				.insert(personalData2)
				.into('personalData2')
				.then(id2 => {
					console.log(id2);
					res.status(201).json(ids[0]);
				})
				.catch(err2 => {
					console.log(err2);
					res.status(500).json(err2);
				});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post('/employment', (req, res) => {
	const message = req.body;
	console.log(message);
	db
		.insert(message)
		.into('employment')
		.then(ids => {
			console.log(ids);
			res.status(201).json(ids);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post('/education', (req, res) => {
	const message = req.body;
	console.log(message);
	db
		.insert(message)
		.into('educatoin')
		.then(ids => {
			console.log(ids);
			res.status(201).json(ids);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
