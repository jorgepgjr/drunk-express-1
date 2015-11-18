var db = require('./../db');

module.exports.name = 'note'; //If not defined the name of the file will take its place
module.exports.actions = [];

module.exports.actions.push({
	route: '',
	method: 'get',	
	handler: function(req, res, next) {
		res.json(db.notes);
	}
});

module.exports.actions.push({
	route: ':id',
	method: 'get',	
	handler: function(req, res, next) {
		res.json(db.notes[req.params.id]);
	}
});