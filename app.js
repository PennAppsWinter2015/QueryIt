
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

fs.readdir("apis", function(err, files) {
	if (err != null) throw err;
	// files = ['yahoofinance.js'];
	for (var i =0; i<files.length; i++) {
		var api = files[i];
		if (api[0] == ".") continue; //ignore hidden files
		var api_object = require("./apis/" + api);
		for (var key in api_object) {
			for(var k = 0; k < api_object[key].phrases.length; k++) {
				classifier.addDocument(api_object[key].phrases[k], api + ' ' + key);
			}
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
		testCase('5 plus 5');
		testCase('6 * 8');

 	});
}, 3000)

function testCase(text) {
	console.log(text+":", classifier.classify(text));
}

app.all('/api', function(req, res) {
	var input = req.body.text || req.query.text;
	getResults(input, function(data) {
		res.json(data)
	},req);
})

var getResults = function(input, callback, req) {
	var api_location = classifier.classify(input).split(" ")
	var filename = api_location[0]
	var method = api_location[1]
	var api = require("./apis/" + filename)[method].call_api(input, function(data) {
		callback(data)
	},req)
}

app.get('/result', function(req, res) {
	var input = req.query.text;
	var url = "http://texta.io/api?text=" + input
	getResults(input, function(data) {
		console.log("result", data)
		res.render('api_results', {url: url, result: JSON.stringify(data)})
	})
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// classifier.events.on('trainedWithDocument', function (obj) {
//    console.log(obj);
// });