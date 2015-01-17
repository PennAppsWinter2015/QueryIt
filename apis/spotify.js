var api = {}

var SpotifyWebApi = require('spotify-web-api-node');
var spotify_helper = require('../helpers/spotify_helper');


var spotifyApi = new SpotifyWebApi();
api.trackSearch = {}
api.trackSearch.phrases = ['music by', 'artist', 'singer', 'songwriter', 'songs by'];

api.trackSearch.call_api = function(rawSearchText, callback) {
  for (var i = 0; i < api.trackSearch.phrases.length; i++) {
    rawSearchText = rawSearchText.replace(api.trackSearch.phrases[i], '')
  };
  spotifyApi.searchTracks('artist:' + rawSearchText.trim())
    .then(function(data) {
  callback(data)
    }, function(err) {
      console.error(err);
    });
}

api.playlistSearch = {}
api.playlistSearch.phrases = ['playlists', 'playlist'];

api.playlistSearch.call_api = function(rawSearchText, callback) {
  for (var i = 0; i < api.playlistSearch.phrases.length; i++) {
    rawSearchText = rawSearchText.replace(api.playlistSearch.phrases[i], '')
  };
  spotifyApi.searchPlaylist(rawSearchText.trim())
    .then(function(data) {
  callback(data)
    }, function(err) {
      console.error(err);
    });
}

module.exports = api;