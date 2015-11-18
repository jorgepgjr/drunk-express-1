var express = require('express');

var app = module.express = express(),
	port = process.env.PORT || 5000;

app.set('view engine', 'jade');
app.set('views', './app/views');

require('./boot')(app);

app.get('/', function(req, res, next) {
	res.render('index');
});

app.listen(port, function() {
	console.log('Listening to: ' + port);
});