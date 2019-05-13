const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const router = express.Router();
const db = knex(knexConfig.development);

const truthCheck = (arr, value) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
};
const truthCheckNonArr = (check, value) => (check === value ? true : false);
router.post('/persdata1', (req, res) => {
	const message = req.body;
	console.log(req.body);
	let personaldata1 = {
		firstname  : message.firstName,
		middlename : message.middleName,
		lastname   : message.lastName,
		prefname   : message.prefName,
		address1   : message.address,
		address2   : message.address2,
		city       : message.city,
		state      : message.state,
		zipcode    : message.zipcode,
		phone      : message.phone,
		altphone   : message.altphone,
		email      : message.email,
	};
	db
		.insert(personaldata1)
		.returning('id')
		.into('personaldata')
		.then(ids => {
			let personaldata2 = {
				parentid      : ids[0],
				fulltime      : truthCheck(message.workType, 'Full Time'),
				parttime      : truthCheck(message.workType, 'Part Time'),
				temporary     : truthCheck(message.workType, 'Temporary'),
				weekdays      : truthCheck(message.scheduleType, 'Weekdays'),
				weekends      : truthCheck(message.scheduleType, 'Weekends'),
				evenings      : truthCheck(message.scheduleType, 'Evenings'),
				nights        : truthCheck(message.scheduleType, 'Nights'),
				referred      : message.referred,
				desiredpay    : message.desiredPay,
				availabledate : message.availableDate,
				position      : message.position,
				authyes       : truthCheckNonArr(message.auth, 'Yes'),
				authno        : truthCheckNonArr(message.auth, 'No'),
				overyes       : truthCheckNonArr(message.under18, 'Yes'),
				overno        : truthCheckNonArr(message.under18, 'No'),
				permityes     : truthCheckNonArr(message.permit, 'Yes'),
				permitno      : truthCheckNonArr(message.permit, 'No'),
			};
			db
				.insert(personaldata2)
				.into('personaldata2')
				.then(id2 => {
					res.status(201).json(ids[0]);
				})
				.catch(err2 => {
					console.log(err2);
					res.status(500).json('Error');
				});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json('Error');
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
		.into('education')
		.then(ids => {
			console.log(ids);
			res.status(201).json(ids);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post('/reference', (req, res) => {
	const message = req.body;
	console.log(message);
	db
		.insert(message)
		.into('references')
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
