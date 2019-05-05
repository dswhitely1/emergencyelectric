const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const router = express.Router();
const db = knex(knexConfig.development);
router.get('/', (req, res) => {
	db
		.select('*')
		.from('personalData')
		.then(rows => {
			console.log(rows);
			res.status(200).json(rows);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});
router.get('/application/personalData/:id', (req, res) => {
	const id = req.params.id;
	db
		.select('*')
		.from('personalData')
		.where('id', '=', `${id}`)
		.then(rows => {
			console.log(rows);
			res.status(200).json(rows);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.get('/application/personalData2/:id', (req, res) => {
	const id = req.params.id;
	db
		.select('*')
		.from('personalData2')
		.where('parentid', '=', `${id}`)
		.then(rows => {
			console.log(rows);
			res.status(200).json(rows);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.get('/application/employment/:id', (req, res) => {
	const id = req.params.id;
	db
		.select('*')
		.from('employment')
		.where('parentid', '=', `${id}`)
		.then(rows => {
			console.log(rows);
			res.status(200).json(rows);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.get('/application/education/:id', (req, res) => {
	const id = req.params.id;
	db
		.select('*')
		.from('education')
		.where('parentid', '=', `${id}`)
		.then(rows => {
			console.log(rows);
			res.status(200).json(rows);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.get('/application/references/:id', (req, res) => {
	const id = req.params.id;
	db
		.select('*')
		.from('references')
		.where('parentid', '=', `${id}`)
		.then(rows => {
			console.log(rows);
			res.status(200).json(rows);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});
module.exports = router;
