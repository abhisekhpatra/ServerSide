var express = require('express');
var map = require('./TaskMap.js');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var d3 = require("d3");
var Datastore = require('nedb'),
db = {};


Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

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

  function isEven(n) {
    console.log(n+"-----------is even")
    if(n==1)
    return 1;
    else
    return n % 2 ;
  }







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
    updateObj.push(UpdateDetails);1
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


app.get('/colorPalette', function (req, res) {
console.log("test");


});




  app.post('/buildTaskMap', function (req, res) {
console.log("building task map------------------------------------>");
var userNo;
var Training;
var jsonData=req.body;

Training="Training.html"


var TaskJson=[];
fs.readFile("weights.csv", "utf8", function(error, data) {
  console.log("in--------------------fs read");
//var taskmap=map.buildMap(jsonData[0],flag);

data = d3.csvParse(data);
Colordata=data;
calm1=[];
calm2=[];
calm3=[];
exciting1=[];
exciting2=[];
exciting3=[];
positive1=[];
positive2=[];
positive3=[];
negative1=[];
negative2=[];
negative3=[];
serious1=[];
serious2=[];
serious3=[];
playful1=[];
playful2=[];
playful3=[];
disturbing1=[];
disturbing2=[];
disturbing3=[];
trustworthy1=[];
trustworthy2=[];
trustworthy3=[];
data.forEach(function(d){
//  console.log("in--------------------d3 read");

calm1.push(d.calm1);
calm2.push(d.calm2);
calm3.push(d.calm3);
exciting1.push(d.exciting1);
exciting2.push(d.exciting2);
exciting3.push(d.exciting3);
serious1.push(d.serious1);
serious2.push(d.serious2);
serious3.push(d.serious3);
playful1.push(d.playful1);
playful2.push(d.playful2);
playful3.push(d.playful3);
positive1.push(d.positive1);
positive2.push(d.positive2);
positive3.push(d.positive3);
negative1.push(d.negative1);
negative2.push(d.negative2);
negative3.push(d.negative3);
disturbing1.push(d.disturbing1);
disturbing2.push(d.disturbing2);
disturbing3.push(d.disturbing3);
trustworthy1.push(d.trustworthy1);
trustworthy2.push(d.trustworthy2);
trustworthy3.push(d.trustworthy3);

});


calm1.shuffle();calm2.shuffle();calm3.shuffle(); exciting1.shuffle();exciting2.shuffle();exciting3.shuffle();negative1.shuffle();negative2.shuffle();negative3.shuffle();
positive1.shuffle();positive2.shuffle();positive3.shuffle();
serious1.shuffle();serious2.shuffle();serious3.shuffle();
playful1.shuffle();playful2.shuffle();playful3.shuffle();
disturbing1.shuffle();disturbing2.shuffle();disturbing3.shuffle();
trustworthy1.shuffle();trustworthy2.shuffle();trustworthy3.shuffle();

var count=1;
var SubBlockData=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
SubBlockData.shuffle();
var userdetails=jsonData[0];
for(j=0;j<=SubBlockData.length;j++)
        {
if(SubBlockData[j]==1)
           {

            palette=[];
            palette.push(calm1[0]);palette.push(calm1[1]);palette.push(calm2[0]);palette.push(calm3[0]);palette.push(calm3[1]);
            palette.shuffle();
            TaskMap = {};
            TaskMap['UserId']= userdetails.UserId;
            TaskMap['Username']= userdetails.Username;
            TaskMap['link']= "Bar_calm1.html";
            TaskMap['taskDone']= "false";
            TaskMap['palette']= palette.toString();
            TaskMap['id']= count++;
            TaskJson.push(TaskMap);

          }if(SubBlockData[j]==2)
           {
            palette=[];
            palette.push(calm1[2]);palette.push(calm1[3]);palette.push(calm2[1]);palette.push(calm3[2]);palette.push(calm3[3]);
            palette.shuffle();
            TaskMap = {};
            TaskMap['UserId']= userdetails.UserId;
            TaskMap['Username']= userdetails.Username;
            TaskMap['link']= "Bar_calm2.html";
            TaskMap['taskDone']= "false";
            TaskMap['palette']= palette.toString();
            TaskMap['id']= count++;
            TaskJson.push(TaskMap);


           }
           if(SubBlockData[j]==3)
           {
           palette=[];
           palette.push(exciting1[0]);palette.push(exciting1[1]);palette.push(exciting2[0]);palette.push(exciting3[0]);palette.push(exciting3[1]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_exciting1.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);

         }if(SubBlockData[j]==4)
          {
           palette=[];
           palette.push(exciting1[2]);palette.push(exciting1[3]);palette.push(exciting2[1]);palette.push(exciting3[2]);palette.push(exciting3[3]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_exciting2.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);


         }if(SubBlockData[j]==5)
           {
           palette=[];
           palette.push(positive1[0]);palette.push(positive1[1]);palette.push(positive2[0]);palette.push(positive3[0]);palette.push(positive3[1]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_positive1.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);

         }if(SubBlockData[j]==6)
          {
           palette=[];
           palette.push(positive1[2]);palette.push(positive1[3]);palette.push(positive2[1]);palette.push(positive3[2]);palette.push(positive3[3]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_positive2.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);


          }
          if(SubBlockData[j]==7)
           {
           palette=[];
           palette.push(negative1[0]);palette.push(negative1[1]);palette.push(negative2[0]);palette.push(negative3[0]);palette.push(negative3[1]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_negative1.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);

         }if(SubBlockData[j]==8)
          {
           palette=[];
           palette.push(negative1[2]);palette.push(negative1[3]);palette.push(negative2[1]);palette.push(negative3[2]);palette.push(negative3[3]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_negative2.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);


          }
          if(SubBlockData[j]==9)
           {
           palette=[];
           palette.push(serious1[0]);palette.push(serious1[1]);palette.push(serious2[0]);palette.push(serious3[0]);palette.push(serious3[1]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_serious1.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);

         }if(SubBlockData[j]==10)
          {
           palette=[];
           palette.push(serious1[2]);palette.push(serious1[3]);palette.push(serious2[1]);palette.push(serious3[2]);palette.push(serious3[3]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_serious2.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);


          }
          if(SubBlockData[j]==11)
           {
           palette=[];
           palette.push(playful1[0]);palette.push(playful1[1]);palette.push(playful2[0]);palette.push(playful3[0]);palette.push(playful3[1]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_playful1.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);

         }if(SubBlockData[j]==12)
          {
           palette=[];
           palette.push(playful1[2]);palette.push(playful1[3]);palette.push(playful2[1]);palette.push(playful3[2]);palette.push(playful3[3]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_playful2.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);


         }if(SubBlockData[j]==13)
           {
           palette=[];
           palette.push(disturbing1[0]);palette.push(disturbing1[1]);palette.push(disturbing2[0]);palette.push(disturbing3[0]);palette.push(disturbing3[1]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_disturbing1.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);

         }if(SubBlockData[j]==14)
          {
           palette=[];
           palette.push(disturbing1[2]);palette.push(disturbing1[3]);palette.push(disturbing2[1]);palette.push(disturbing3[2]);palette.push(disturbing3[3]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_disturbing2.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);


         }if(SubBlockData[j]==15)
           {
           palette=[];
           palette.push(trustworthy1[0]);palette.push(trustworthy1[1]);palette.push(trustworthy2[0]);palette.push(trustworthy3[0]);palette.push(trustworthy3[1]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_trustworthy1.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);

         }if(SubBlockData[j]==15)
          {
           palette=[];
           palette.push(trustworthy1[2]);palette.push(trustworthy1[3]);palette.push(trustworthy2[1]);palette.push(trustworthy3[2]);palette.push(trustworthy3[3]);
           palette.shuffle();
           TaskMap = {};
           TaskMap['UserId']= userdetails.UserId;
           TaskMap['Username']= userdetails.Username;
           TaskMap['link']= "Bar_trustworthy2.html";
           TaskMap['taskDone']= "false";
           TaskMap['palette']= palette.toString();
           TaskMap['id']= count++;
           TaskJson.push(TaskMap);


          }

         }
         db.users.update({ UserName:jsonData[0].Username }, { $set: { DataType: Training} }, {},function (err, numReplaced) {
             console.log("updated user----------------------------->" + numReplaced);

             Obj=[];
             Details = {};
             Details ["Username"] =jsonData[0].Username;
             Details ["Training"] =Training;
             Obj.push(Details);

             for (var i=0; i<TaskJson.length; i++){
                 console.log("---------------logging Taskmaps"+TaskJson[i]);
               db.taskmap.insert(TaskJson[i]);

             }
               res.send(JSON.stringify(Obj));

             });

         console.log(TaskJson.length+"---------task map length"+userdetails.Username);

});


  console.log("done assigining task map------------------------------------>");


  });






  app.listen(3000, function () {
      console.log(this.address());
    });
