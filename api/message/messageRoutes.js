const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const router = express.Router();
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
	res.status(200).send('Messages is working');
});

router.post('/new-message', (req, res) => {
	const message = req.body;
	console.log(req.body);
	db
		.insert(message)
		.into('messages')
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
