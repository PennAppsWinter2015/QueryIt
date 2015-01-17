var api = {}

api.popularMusic = {
	phrases: ['top 100 songs', 'radio music', 'top music charts'],
	call_api: function() {
		console.log('fetching music')
         
	}
}

api.hiphopMusic = {
	phrases: ['hiphop', 'rap', 'mixtape', 'top hiphop'],
	call_api: function() {
		console.log('fetching hiphop music')
	}
}

module.exports = api;