var api = {}

var request = require('request');
var keys = require('../keys.js');

api.topNews = {
  phrases: ['breaking news', 'todays news','current news', 'news', 'News', 'todays news'],
  call_api: function(raw_text, callback) {
    raw_text = raw_text.replace("news","");
    request('http://api.usatoday.com/open/articles?keyword='+ raw_text +'&encoding=JSON&api_key=' + keys.USATODAY_ARTICLES_KEY, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(JSON.parse(body).stories)
      } else {
        callback(error)
      }
    })
  }
}
// api.lifeNews = {
//   phrases: ['entertainment','kim kardashian','reality tv','movie','box office film Fox people','TMZ Actor','Actress love','ex','dating','videos','music','critics marriage','celebrity','gossip','fake','awards','emmys','oscars presentation vma golden globes'],
//   call_api: function(raw_text, callback) {
//       request('http://api.usatoday.com/open/articles/topnews/life?encoding=JSON&api_key=' + keys.USATODAY_ARTICLES_KEY, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         callback(body)
//       } else {
//         callback(error)
//       }
//     })
//   }
// }
// api.moneyNews = {
//   phrases: ['money','stocks','buy','sell','economy banks federal reserve bull','wall street','stock market','rating','DOW Jones','NASDAQ','S&P 500','Financial News','Unemployment','GDP','Economy','Economics','Bonds','Mutual Funds'],
//   call_api: function(raw_text, callback) {
//       request('http://api.usatoday.com/open/articles/topnews/money?encoding=JSON&api_key=' + keys.USATODAY_ARTICLES_KEY, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         callback(body)
//       } else {
//         callback(error)
//       }
//     })
//   }
// }

// api.sportsNews = {
//   phrases: ['sports','sports news','football','basketball','NFL NBA MLB MLS','soccer','Super Bowl','Coach','Team','Score','Fans','World Series','World Cup','Olympics','Tennis','Golf','Swimming','Cricket'],
//   call_api: function(raw_text, callback) {
//     request('http://api.usatoday.com/open/articles/topnews/sports?encoding=JSON&api_key=' + keys.USATODAY_ARTICLES_KEY, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         callback(body)
//       } else {
//         callback(error)
//       }
//     })
//   }
// }

// api.techNews = {
//   phrases: ['technology','tech news','apple','social media','facebook','google','apps','iPhone','Android','smartphone','computer','laptop','chromebook'],
//   call_api: function(raw_text, callback) {
//     request('http://api.usatoday.com/open/articles/topnews/tech?encoding=JSON&api_key=' + keys.USATODAY_ARTICLES_KEY, function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         callback(body)
//       } else {
//         callback(error)
//       }
//     })
//   }
// }

module.exports = api;