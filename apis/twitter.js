var api = {}

api.trending = {
	phrases: ['trending on twitter', 'popular on twitter'],
	call_api: function() {
		console.log('fetching twitter topics')
	}
}

api.top_users = {
	phrases: ['top accounts', 'most popular users'],
	call_api: function() {
		console.log('fetching top twitter users')
	}
}

module.exports = api;