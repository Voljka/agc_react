var express = require('express');
var router = express.Router();

var respondMaker = require('../respondTemplates/transformer');
var respondView = require('../respondTemplates/groups');

var GroupService = require('../services/GroupService');

router.get('/', function(req, res) {

	GroupService().getAll()
		.then( function(data) {
			return respondMaker(respondView, data)	
		})
		.then( function(view) {
			return res.json(view);
		})
		.catch( function(err) {
			console.err(err);
		})

});

module.exports = router;