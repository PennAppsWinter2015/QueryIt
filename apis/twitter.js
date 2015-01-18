var api = {}

var Twit = require('twit')
var request = require('request')
function getKeys() {
	var keys = require('../keys.js')
	var num_keys = keys.TWITTER_CONSUMER_KEY.length;
	var chosen_key = Math.floor(Math.random() * num_keys);
	console.log("*** USING API KEY: " + chosen_key)
	return chosen_key;
}

function getTwitterAPI() {
	key = getKeys();
	return new Twit({
      consumer_key:         keys.TWITTER_CONSUMER_KEY[key]
    , consumer_secret:      keys.TWITTER_CONSUMER_SECRET[key]
    , access_token:         keys.TWITTER_ACCESS_TOKEN[key]
    , access_token_secret:  keys.TWITTER_ACCESS_TOKEN_SECRET[key]
  })
}




api.trending_location = {
  phrases: ['trending tweets in the us', 'trending tweets', 'popular tweets'],
  call_api: function(rawSearchText, callback) {
	var T = getTwitterAPI();
    location = replaceStringsWithBlank(['trending', 'tweets', 'in'], rawSearchText)
    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + keys.GOOGLE_GEO,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          loc = JSON.parse(body)
          try {
            geoLocation = loc["results"][0]["geometry"]["location"]
          	console.log(geoLocation)
          } catch(e) {
          	getTwitterAPI().get('trends/place', {id : 1}, function(err, d, response) {
              if (err != null) {
              	console.log("trends/place WORLDWIDE error", err)
              	return;
              }
              callback(d)
            })
            return;
          }
		  var T = getTwitterAPI();
          T.get('trends/closest', {lat : geoLocation["lat"], long: geoLocation["lng"]}, function(err, data, response) {
            if (err != null) {
            	callback("trends/closest 1 error", err)
            	return;
            }
		    var T = getTwitterAPI();
            T.get('trends/place', {id : data[0].woeid}, function(err, trendingData, response) {
              if (err != null) {
              	console.log("trends/place error", err)
              	return;
              }
              callback(trendingData)
            })
          })
        } else {
        	callback('googleapis error' + error)
        	return;
        }
    })

  }
}

function replaceStringsWithBlank(strings, string) {
    for (var i = 0; i < strings.length; i++) {
        string = string.replace(strings[i], "")
    };
    return string;
}
module.exports = api;