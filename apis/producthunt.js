var api = {}

api.todaysProducts = {
	phrases: ['coolest products', 'todays tech'],
	call_api: function() {
		console.log('fetching...')
	}
}

api.topProductsAllTime = {
	phrases: ['best apps of the year', 'coolest websites of the year'],
	call_api: function() {
		console.log('fetching top product hunts of the year')
	}
}

module.exports = api;