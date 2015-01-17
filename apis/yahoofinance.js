var api = {}

var _ = require('lodash');
var yahooFinance = require('yahoo-finance');
var util = require('util');

var FIELDS = _.flatten([
  // Pricing
  ['a', 'b', 'b2', 'b3', 'p', 'o'],
  // Dividends
  ['y', 'd', 'r1', 'q'],
  // Date
  ['c1', 'c', 'c6', 'k2', 'p2', 'd1', 'd2', 't1'],
  // Averages
  ['c8', 'c3', 'g', 'h', 'k1', 'l', 'l1', 't8', 'm5', 'm6', 'm7', 'm8', 'm3', 'm4'],
  // Misc
  ['w1', 'w4', 'p1', 'm', 'm2', 'g1', 'g3', 'g4', 'g5', 'g6'],
  // 52 Week Pricing
  ['k', 'j', 'j5', 'k4', 'j6', 'k5', 'w'],
  // System Info
  ['i', 'j1', 'j3', 'f6', 'n', 'n4', 's1', 'x', 'j2'],
  // Volume
  ['v', 'a5', 'b6', 'k3', 'a2'],
  // Ratio
  ['e', 'e7', 'e8', 'e9', 'b4', 'j4', 'p5', 'p6', 'r', 'r2', 'r5', 'r6', 'r7', 's7'],
  // Misc
  ['t7', 't6', 'i5', 'l2', 'l3', 'v1', 'v7', 's6', 'e1']
  ]);

var symbolMatch = /(?:^| )([A-Z]+?)(?:$| )/gm;

api.getQuote = {
	phrases: ['get quote', 'stock', 'stock price', 'price of', 'what is trading at'],
	call_api: function(rawText, callback) {
		console.log('grabbing stock price');
		var matched;
		if(matched = rawText.match(symbolMatch)) {
			var SYMBOL = matched[0];
			yahooFinance.snapshot({
				fields: FIELDS,
				symbol: SYMBOL
			}, function (err, snapshot) {
				if (err) { throw err; }
				console.log(util.format('=== %s ===', SYMBOL).cyan);
				console.log(JSON.stringify(snapshot, null, 2));
				callback(snapshot);
			});
		}
		else {
			callback('Could not understand your input!');
		}
	}
}

module.exports = api;