var api = {}

var request = require('request');
var keys = require('../keys.js');

api.topNews = {
  phrases: ['breaking news', 'todays news','current news', 'news', 'News', 'todays news'],
  call_api: function(raw_text, callback) {
    raw_text = raw_text.replace("news","");
    request('http://api.usatoday.com/open/articles?keyword='+ raw_text +'&encoding=JSON&api_key=' + keys.USATODAY_ARTICLES_KEY, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(JSON.parse(body).stories)
      } else {
        callback(error)
      }
    })
  }
}

module.exports = api;