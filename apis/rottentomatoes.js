var api = {}

api.new_movies_in_theatres = {
	phrases: [ 'new movies', 'in theatres', 'new releases'],
	call_api: function() {
		console.log('getting movie tickets')
        return 
	}
}


    
api.movie_info = {
	phrases: ['movie cast', ' movie actors', 'actors in', 'cast of', 'rising', 'ratings', 'how good'],
	call_api: function() {
		console.log('getting cast info')
	}
}

module.exports = api;