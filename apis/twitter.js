var api = {}

var Twit = require('twit')
var keys = require('../keys.js')
var request = require('request')


var T = new Twit({
    consumer_key:         keys.TWITTER_CONSUMER_KEY
  , consumer_secret:      keys.TWITTER_CONSUMER_SECRET
  , access_token:         keys.TWITTER_ACCESS_TOKEN
  , access_token_secret:  keys.TWITTER_ACCESS_TOKEN_SECRET
})

api.trending = {
  phrases: ['trending on twitter worldwide', 'popular on twitter worldwide', 'popular on twitter everywhere'],
  call_api: function(rawSearchText, callback) {
    T.get('trends/place', {id : "1"}, function(err, data, response) {
        if (err != null) console.log("error", err)
      callback(data)
    })
  }
}

api.trending_location = {
  phrases: ['trending tweets in the us', 'trending tweets', 'popular tweets'],
  call_api: function(rawSearchText, callback) {
    location = replaceStringsWithBlank(['trending', 'tweets', 'in'], rawSearchText)
    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=' + keys.GOOGLE_GEO,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          loc = JSON.parse(body)
          console.log(location)
          console.log(loc)
          geoLocation = loc["results"][0]["geometry"]["location"]
          T.get('trends/closest', {lat : geoLocation["lat"], long: geoLocation["lng"]}, function(err, data, response) {
            if (err != null) console.log("error", err)
            T.get('trends/place', {id : data[0].woeid}, function(err, trendingData, response) {
              if (err != null) console.log("error", err)
                callback(trendingData)
            })
          })
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