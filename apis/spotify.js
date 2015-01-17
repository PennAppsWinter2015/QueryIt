var api = {}

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();
api.artistSearch = {}
api.artistSearch.phrases = ['music by', 'artist', 'singer', 'songwriter'];

api.artistSearch.call_api = function(rawSearchText, callback) {
  for (var i = 0; i < api.artistSearch.phrases.length; i++) {
    rawSearchText = rawSearchText.replace(api.artistSearch.phrases[i], '')
  };
  spotifyApi.searchTracks('artist:' + rawSearchText.trim())
    .then(function(data) {
  callback(data)
    }, function(err) {
      console.error(err);
    });
}

// api.trackSearch = {
//   phrases: ['music', 'top 100 hits', 'hits', 'rap','country','pop','billboard hits'],
//   call_api: function(rawSearchText, callback) {
//     spotifyApi.searchTracks(artist)
//       .then(function(data) {
//     callback(data)
//       }, function(err) {
//         console.error(err);
//       });
//   }
// }

module.exports = api;