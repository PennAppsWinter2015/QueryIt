var api = {}

api.topStocks = {
	phrases: ['top stocks', 'reddit', 'sub reddit'],
	call_api: function() {
		console.log('fetching reddit data')
        return 
	}
}

api.fiftwoWeekLow = {
	phrases: ['52 week low', 'most upside potential'],
	call_api: function() {
		console.log('fetching reddit front page')
	}
}

module.exports = api;