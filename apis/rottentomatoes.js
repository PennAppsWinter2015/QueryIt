var api = {}

api.new_movies_in_theatres = {
	phrases: [ 'new movies', 'in theatres', 'new releases'],
	call_api: function() {
		console.log('getting movie tickets')
        return 
	}
}

api.cast_info = {
	phrases: ['movie cast', ' movie actors', 'actors in', 'cast of', 'rising'],
	call_api: function() {
		console.log('getting cast info')
	}
}

module.exports = api;