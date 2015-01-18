var api = {}

var Reddit = require('handson-reddit');

var reddit = new Reddit()

api.trendingSubReddits = {
	phrases: [ 'popular sub reddits', 'subreddit', 'sub reddit'],
	call_api: function() {
		console.log('fetching reddit data')
        return 
	}
}

api.frontPage = {
	phrases: ['reddit front page', 'trending on reddit', 'reddit', 'hot', 'rising'],
	call_api: function(rawText, callback) {
        reddit.r('all', function (err, results) {
            if (err != null) console.log("error", err)
		    callback(results.body)
        })
		console.log('fetching reddit front page')
	}
}

module.exports = api;