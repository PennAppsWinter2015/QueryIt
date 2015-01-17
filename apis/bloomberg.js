var api = {}

api.priceToEarnings = {
	phrases: ['price', 'earnings', 'pe', 'p/e'],
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

api.fiftwoWeekHigh = {
	phrases: ['52 week high', 'well performing', 'bullish'],
	call_api: function() {
		console.log('fetching stock data')
	}
}

api.stockPrice = {
	phrases: ['stock', 'price'],
	call_api: function() {
		console.log('fetching stock data')
	}
    
   
    
}

module.exports = api;