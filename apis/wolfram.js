var api = {}

var keys = require('../keys.js');

var Client = require('node-wolfram');
var Wolfram = new Client(keys.WOLFRAM_ALPHA_KEY);

api.math = {
	phrases: ['plus', 'minus', 'divided', 'times', 'multiplied', 'nutrition information', 'nutrition facts', 'define', 'what does mean', 'what is', 'film', 'movie'],
	call_api: function(rawSearchText, callback) {
		Wolfram.query(rawSearchText, function(err, result) {
		    if(err)
		        console.log(err);
		    else {
		    	callback(result);
		    }
		});
	}
}

module.exports = api;