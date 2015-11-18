/* Loops through all files in controllers folder in order to configure express routes */

var fs = require('fs');

module.exports = function(app) {
	
	fs.readdirSync(__dirname + '/controllers').forEach(function(name) {
		
		var obj = require(__dirname + '/controllers/' + name);
		var name = obj.name || (name.replace('.js',''));
		
		for (var key in obj.actions) {
			var action = obj.actions[key];
			
			var method = action.method;
			var route = '/' + name + '/' + action.route;
			var handler = action.handler;
			
			app[method](route, handler);
		}
		
	});
	
}
