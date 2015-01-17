var api = {}

var Twit = require('twit')
var keys = require('../keys.js')

var T = new Twit({
    consumer_key:         keys.TWITTER_CONSUMER_KEY
  , consumer_secret:      keys.TWITTER_CONSUMER_SECRET
  , access_token:         keys.TWITTER_ACCESS_TOKEN
  , access_token_secret:  keys.TWITTER_ACCESS_TOKEN_SECRET
})

api.trending = {
	phrases: ['trending on twitter', 'popular on twitter'],
	call_api: function(rawSearchText, callback) {
		T.get('trends/place', {id : "1"}, function(err, data, response) {
		    if (err != null) console.log("error", err)
		  callback(data)
		})
	}
}

api.top_users = {
	phrases: ['top accounts', 'most popular users'],
	call_api: function() {
		console.log('fetching top twitter users')
	}
}

module.exports = api;