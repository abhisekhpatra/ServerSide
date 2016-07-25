var express = require('express');
var map = require('./TaskMap.js');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var Datastore = require('nedb');
var json2csv = require('json2csv');
var csvdata;
var fields=['UserId','TaskId','Task','ChartType','ValueType','StepperCount','ColorsUsed','AlphaValue','Timestamp','UserRating','_id'];

db = {};
//db.users = new Datastore({filename: 'users.db', autoload: true});
var databaseFile = 'Colors.db';
var userFile = 'User.db';
var taskFile = 'TaskMap.db';
db.colors = new Datastore({filename: databaseFile, autoload: true});
db.users = new Datastore({filename: userFile, autoload: true});
db.taskmap = new Datastore({filename: taskFile, autoload: true});
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});





  app.post('/csv', function (req, res) {
    console.log("csv---------------------------------------------->");



      db.colors.find({}, function (err, docs) {



        json2csv({ data: docs, fields: fields }, function(err, csv) {
          if (err) console.log(err);
          fs.writeFile('file.csv', csv, function(err) {
            if (err) throw err;
            console.log('file saved');
          });
        });
      });

  });





app.listen(3000, function () {
    console.log(this.address());
  });
