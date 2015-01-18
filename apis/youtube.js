var api = {}

var Youtube = require("youtube-api");
var keys = require('../keys.js');

Youtube.authenticate({
    type: "key"
  , key: keys.YOUTUBE_KEY
});


api.top_videos = {
  phrases: ['popular videos', 'popular youtube videos'],
  call_api: function(rawSearchText, callback) {
    Youtube.search.list({
        "part": "id, snippet"
      , "maxResults": 5
      , "order": "viewCount"
      , "type": "video"
    }, function (err, data) {
        if (err != null) console.log("error", err)
        callback(data)
    });
  }
}

api.channel_search = {}    
api.channel_search.phrases = ['videos by', 'video'];

api.channel_search.call_api = function(rawSearchText, callback) {
    for (var i = 0; i < api.channel_search.phrases.length; i++) {
      rawSearchText = rawSearchText.replace(api.channel_search.phrases[i], '')
    };
  Youtube.search.list({
      "part": "id, snippet"
    , "maxResults": 50
    , "type": "video"
        , "q": rawSearchText
  }, function (err, data) {
      if (err != null) console.log("error", err)
      callback(data)
  });
}

module.exports = api;