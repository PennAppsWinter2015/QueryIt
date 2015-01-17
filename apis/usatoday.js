var api = {}

var request = require('request');
var keys = require('../keys.js');

api.breakingNews = {
  phrases: ['breaking news', 'current news', 'news', 'todays news'],
  call_api: function(raw_text, callback) {
    request('http://api.usatoday.com/open/breaking?expired=true&api_key=' + keys.USATODAY_BREAKING_NEWS_KEY, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(body)
      } else {
        callback(error)
      }
    })
  }
}

module.exports = api;