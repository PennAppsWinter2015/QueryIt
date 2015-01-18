var api = {}

var keys = require('../keys.js')
var yelp = require("yelp").createClient({
	consumer_key: keys.YELP_CONSUMER_KEY, 
	consumer_secret: keys.YELP_CONSUMER_SECRET,
	token: keys.YELP_TOKEN,
	token_secret: keys.YELP_TOKEN_SECRET
});
var freegeoip = require('node-freegeoip');

api.findSnacks = {
	phrases: ["i want food", "feed me", "feed", "hungry", "dinner", "lunch", "breakfast", "snacks"],
	call_api: function(rawText, callback, req) {
		freegeoip.getLocation('165.123.116.117', function(err, location) {
			console.log(location);
			// See http://www.yelp.com/developers/documentation/v2/search_api
			yelp.search({term: "food", location: location['zip_code']}, function(error, data) {
				console.log(error);
				console.log(data);
				callback(data);
			});
		});
	}
}
/*
// See http://www.yelp.com/developers/documentation/v2/business
yelp.business("yelp-san-francisco", function(error, data) {
	console.log(error);
	console.log(data);
});
*/

module.exports = api;