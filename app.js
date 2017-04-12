'use strict';

const express = require('express');
const app = express();
const friends = require('./routes/friends.js');

app.use(express.static('public'));
app.use('/friends', friends);


app.get('/', function(req, res) {
	res.send('heyyy');
});
app.get('/login', function(req, res) {
	res.sendFile(__dirname + '/views/login.html')
})


app.listen(3000, () => {
	console.log('hogeeee');
});
