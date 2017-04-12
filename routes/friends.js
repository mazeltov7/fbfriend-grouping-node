const express = require('express');
const router = express.Router();
const path = require('path');

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

router.get('/', function(req, res) {
	res.sendFile(path.resolve('views/friends.html'));
});

router.get('/show', function(req, res) {
	res.send('friiiiiends show');
});

module.exports = router;