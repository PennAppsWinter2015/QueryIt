var api = {}

api.topStocks = {
	phrases: ['top stocks', 'stocks',],
	call_api: function() {
		console.log('fetching stock data')
        return 
	}
}

api.fiftwoWeekLow = {
	phrases: ['52 week low', 'most upside potential'],
	call_api: function() {
		console.log('fetching stock data')
	}
}

module.exports = api;