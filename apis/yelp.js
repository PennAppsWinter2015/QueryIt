var api = {}

var yelp = require("yelp").createClient({
	consumer_key: keys.YELP_CONSUMER_KEY, 
	consumer_secret: keys.YELP_CONSUMER_SECRET,
	token: keys.YELP_TOKEN,
	token_secret: keys.YELP_TOKEN_SECRET
});
var keys = require('../keys.js')

api.findSnacks = {
	phrases: ["i want food", "feed me", "hungry", "dinner", "lunch", "breakfast", "snacks"],
	call_api: function(rawText, callback) {
		// See http://www.yelp.com/developers/documentation/v2/search_api
		yelp.search({term: "food", location: "Montreal"}, function(error, data) {
			console.log(error);
			console.log(data);
		});
	}
}

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business("yelp-san-francisco", function(error, data) {
	console.log(error);
	console.log(data);
});