
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , fs = require('fs')
  , methodOverride = require('method-override');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.get('/', routes.index);

fs.readdir("apis", function(err, files) {
	if (err != null) throw err;
	for (var i =0; i<files.length; i++) {
		var api = files[i];
		if (api[0] == ".") continue; //ignore hidden files
		var api_object = require("./apis/" + api);

		console.log('\n\napi name: ' + api)
		for (var key in api_object) {
			console.log('\napi method: ', key)
			console.log('api phrases: ', api_object[key].phrases)
			api_object[key].call_api(function(result) {
				if (result != null) console.log("Result: %j", result);
			})
		}
	}
})


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});