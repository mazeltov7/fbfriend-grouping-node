var express = require('express')
var app = express();

app.get('/', function(req, res) {
	res.send('heyyy');
});

app.listen(3000, () => {
	console.log('hogeeee');
});
