var express = require('express');
var map = require('./TaskMap.js');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var Datastore = require('nedb'),
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

app.post('/colors', function (req, res) {

  console.log("InColors--------------------------------------------------->");

  var jsonData=req.body;
  for (var i=0; i<jsonData.length; i++){
    console.log(jsonData[i]);

    db.colors.insert(jsonData[i]);
    console.log("data inserted into colors-------------------------------->");
    res.send();
  }
});




  app.post('/registerUser', function (req, res) {
    console.log("registering---------------------------------------------->");
    var jsonData=req.body;

    var uname=jsonData[0].UserName;
      db.users.find({ UserName: uname }, function (err, docs) {
        if(docs.length===0){
          console.log("inserting------------------------------------------->");
          db.users.insert(jsonData[0]);

          Obj=[];
          Details = {};

          Details ["Username"] =uname;
          Details ["firstTime"] ="true";
          Obj.push(Details);
          res.send(JSON.stringify(Obj));
        }else{

          console.log(docs[0]+"User Already Present========================>");
          Obj=[];
          Details = {};

          Details ["Username"] =uname;
          Details ["firstTime"] ="false";
          Details ["link"] =docs[0].DataType;

          Obj.push(Details);
          res.send(JSON.stringify(Obj));
        };

      });

  });

  function shuffle(o) {
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

  app.post('/buildTaskMap', function (req, res) {
console.log("building task map------------------------------------>");
var userNo;
var Training;
var jsonData=req.body;
var BlockData=[1,2];
shuffle(BlockData);
db.users.count({}, function (err, count) {
  console.log("Number of users----------------------------------------"+count);
    var taskmap=map.buildMap(jsonData[0],count,BlockData);
    if(BlockData[0]==1){
      Training="TrainingCategorical.html"
    }else{
      Training="TrainingDiverging.html"
    }
        db.users.update({ UserName:jsonData[0].Username }, { $set: { DataType: Training} }, {},function (err, numReplaced) {
        console.log("updated user----------------------------->" + numReplaced);

        });
    Obj=[];
    Details = {};
    Details ["Username"] =jsonData[0].Username;
    Details ["Training"] =Training;
    Obj.push(Details);

    for (var i=0; i<taskmap.length; i++){
      //  console.log(jsonData[i]);
      db.taskmap.insert(taskmap[i]);
    }
    res.send(JSON.stringify(Obj));
    console.log("done assigining task map------------------------------------>");


    });



  });





    app.post('/unregisterUser', function (req, res) {
  console.log("deleting user------------------------------------>");
      var jsonData=req.body;
      console.log(jsonData);
      var uname=jsonData[0].Username;

      db.users.remove({ UserName: uname}, {}, function (err, numRemoved) {
  console.log("removed----------------------------->" + numRemoved);
  res.send();
});
      console.log("done deleting user------------------------------------>");
    });











app.post('/taskDetails', function (req, res) {

  console.log("getting task details-------------------------------->");
  var jsonData=req.body;

  var uname=jsonData[0].UserName;
  var filter=[];

console.log(uname);

db.taskmap.find({ Username: uname, taskDone:'false' }).sort({id:1}).limit(1).exec(function (err, docs) {
  console.log(docs);

  if(docs.length===0){
    updateObj=[];
    UpdateDetails = {};
    UpdateDetails ["id"] = 20;
    UpdateDetails ["Username"] =uname;
    UpdateDetails ["link"] ="Thankyou.html";
    updateObj.push(UpdateDetails);
    res.send(JSON.stringify(updateObj));
  }else{filter=docs;
  res.send(JSON.stringify(filter));
}

});

});



app.post('/updateTask', function (req, res) {
  console.log("InUpdate");
  var jsonData=req.body;
  console.log(jsonData);
  var id=parseInt(jsonData[0].id);
  var uname=jsonData[0].Username;
  var filter=[];
console.log(id+"-----"+uname);

db.taskmap.update({ id:id, Username:uname }, { $set: { taskDone: "true"} }, {},function (err, numReplaced) {
console.log("replaced----------------------------->" + numReplaced);

});



db.taskmap.find({ Username: uname, taskDone:'false' }).sort({id:1}).limit(1).exec(function (err, docs) {
console.log("InUpdate finding next task---------------------------------------->");
    console.log(docs);
      if(docs.length===0){
        updateObj=[];
        UpdateDetails = {};
        UpdateDetails ["id"] = 20;
        UpdateDetails ["Username"] =uname;
        UpdateDetails ["link"] ="Thankyou.html";
        updateObj.push(UpdateDetails);
        res.send(JSON.stringify(updateObj));
      }
      else{
        filter=docs;
        res.send(JSON.stringify(filter));
      }

  });

});




app.listen(3000, function () {
    console.log(this.address());
  });
