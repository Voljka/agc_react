var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.json({data: 'API return a result'})
});

module.exports = router;