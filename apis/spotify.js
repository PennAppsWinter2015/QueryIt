var api = {}

api.artistSearch = {
	phrases: ['music by', 'artist', 'singer', 'songwriter'],
	call_api: function() {
		console.log('fetching artiest')
         
	}
}
api.trackSearch = {
	phrases: ['music', 'top 100 hits', 'hits', 'rap','country','pop','billboard hits'],
	call_api: function() {
		console.log('fetching track')
         
	}
}



module.exports = api;