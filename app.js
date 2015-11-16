var xmldoc=require('xmldoc')
var request = require('request');
var et = require('elementtree');
var fs = require('fs');
var uri = 'http://backend.deviantart.com/rss.xml?q=boost%3Apopular+in%3Adigitalart%2Ffractals+threat&amp;type=deviation';

request({
  method: 'GET',
  uri: uri,
  headers: {
    'Accepts': 'application/xml',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36'
  }
}, function (err, res, body) {
  if (err) { throw err; }
  etree = et.parse(body.toString('utf8'));
item=etree.findall('./channel/item/media:content');

   item.forEach(function(d){
    var url=d.attrib.url;
    var n=url.lastIndexOf("/");
    var filename=url.substring(n+1, url.length)
    //console.log(filename)
    request( url).pipe(fs.createWriteStream('./photos/'+ filename))
   });

});
