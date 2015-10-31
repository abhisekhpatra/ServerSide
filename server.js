var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'photos')));

app.get('/', function (req, res) {
  fs.readdir('./photos', function (err, list) {
    res.json(list);
  });
});

app.listen(3000, function () {
  console.log(this.address());
});
