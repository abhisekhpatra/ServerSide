var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var Datastore = require('nedb'),
db = {};
//db.users = new Datastore({filename: 'users.db', autoload: true});
var databaseFile = 'Colors.db';
db.colors = new Datastore({filename: databaseFile, autoload: true});
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/colors', function (req, res) {

    //res.json(list)
console.log('body: ' + JSON.stringify(req.body));
var jsonData=req.body;
for (var i=0; i<jsonData.length; i++){
            console.log(jsonData[i]);
            db.colors.insert(jsonData[i]);
        }
});

app.listen(3000, function () {
  console.log(this.address());
});
