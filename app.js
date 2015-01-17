
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

var natural = require('natural'),
  classifier = new natural.BayesClassifier();

app.get('/', routes.index);

//in memory storage of the apis
// [{raw_text, func}]

var apis = []

fs.readdir("apis", function(err, files) {
	if (err != null) throw err;
	files = ['yahoofinance.js'];
	for (var i =0; i<files.length; i++) {
		var api = files[i];
		if (api[0] == ".") continue; //ignore hidden files
		var api_object = require("./apis/" + api);
		console.log('\n\napi name: ' + api)
		for (var key in api_object) {
			console.log('\napi method: ', key)
			console.log('api phrases: ', api_object[key].phrases)
			for(var k = 0;k < api_object[key].phrases.length;k++) {
				console.log('adding ' + api_object[key].phrases[k] + ', ' + key);
				classifier.addDocument(api_object[key].phrases[k],key);
			}
			api_object[key].call_api("country playlists", function(result) {
				if (result != null) console.log("Result: %j", result);
			})
		}
	}
	classifier.train();
})

setTimeout(function() {
	classifier.save('classifier.json', function(err, classifier) {
		testCase("most popular videos on youtube");
		testCase("youtube's top videos");
		testCase("popular youtube videos");
		testCase("music by kanye west");
		testCase('most famous twitter accounts');
		testCase('what is AAPL trading at');
		testCase('stock price AAPL');

 	});
}, 3000)

function testCase(text) {
	console.log(text+":", classifier.classify(text));
}


app.post('/new_api', function(req, res) {
	// add api to apis{}
	// redirect to api/:hash
})

app.get('/api/:id', function(req, res) {
	var api = apis[req.param.id]
	api.func.call_api(api.raw_text, function (data) {
		res.json(data)
	})
})


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});