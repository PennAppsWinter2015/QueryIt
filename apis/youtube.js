var api = {}

var Youtube = require("youtube-api");
var keys = require('../keys.js');

Youtube.authenticate({
    type: "key"
  , key: keys.YOUTUBE_KEY
});


api.top_videos = {
	phrases: ['popular videos', 'popular youtube videos'],
	call_api: function(callback) {
		Youtube.search.list({
		    "part": "id, snippet"
		  , "maxResults": 5
		  , "order": "viewCount"
		  , "type": "video"
		}, function (err, data) {
		    if (err != null) console.log("error", err)
		    console.log(data)
		    callback(data)
		});
	}
}

module.exports = api;