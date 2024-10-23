var express = require('express');
import fetch from 'node-fetch';
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/users/:userId/books/:bookId', function(req, res) {
	res.send(req.params);
});

fetch('https://github.com')
	.then(res => res.text())
	.then(body => console.log(body));

app.listen(port, function() {
	console.log('Example app listening on port ' + port);
});
