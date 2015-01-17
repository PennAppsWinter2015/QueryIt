var api = {}

api.trendingSubReddits = {
	phrases: [ 'popular sub reddits', 'subreddit', 'sub reddit'],
	call_api: function() {
		console.log('fetching reddit data')
        return 
	}
}

api.frontPage = {
	phrases: ['reddit front page', 'trending on reddit', 'reddit'],
	call_api: function() {
		console.log('fetching reddit front page')
	}
}

module.exports = api;