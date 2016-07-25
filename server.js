var express = require('express');
var fs = require('fs');
var path = require('path');

var Combinatorics = require('./combinatorics.js');
var d3 = require("d3");

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


app.get('/colorPalette', function (req, res) {
console.log("test");
fs.readFile("weights.csv", "utf8", function(error, data) {
data = d3.csvParse(data);
Colordata=data;
calm=[];
entries=[];
data.forEach(function(d){
console.log(d.calm1);
    calm.push(d.Hex);

})


cmb = Combinatorics.bigCombination(calm, 5);
console.log(cmb.length);
fs.readFile("edges.csv", "utf8", function(error, data){

  Edgedata=data =d3.csvParse(data);

    res.send(result);
  console.log(result);
});
});
});






function type(d) {
  d.weight = +d.weight;
  d.distance = +d.distance;
  return d;
}


function buildPalettes(){
    palettelist=[];
    var m = d3.map(Colordata, function(d) { return d.Hex; });
    var e = d3.map(Edgedata, function(d) { return d.id; });
    k=0;
    test=cmb;

   while(a = cmb.next()){
console.log(k++);
        UserDetails = {};
        UserDetails ["c1"] = a[0]
        UserDetails ["c2"] = a[1];
        UserDetails ["c3"] = a[2];
        UserDetails ["c4"] = a[3];
        UserDetails ["c5"] = a[4];

        UserDetails ["paletteWeight"] = m.get(a[0]).weight+m.get(a[1]).weight+m.get(a[2]).weight+m.get(a[3]).weight+m.get(a[4]).weight;
        edgwt=0;
        edgdist=0;
        edg = Combinatorics.combination(a, 2);
        dist=0;
        while(b = edg.next()){
            var key1=b[0]+b[1];
            var key2=b[1]+b[0];
            if(typeof(e.get(key1))!='undefined')
            {
             edgwt=edgwt+e.get(key1).weight;

            }
            if(typeof(e.get(key2))!='undefined')
            {
             edgwt=edgwt+e.get(key2).weight;

            }
             c1=d3.lab(b[0]);
             c2=d3.lab(b[1]);
             dist=dist+Math.sqrt(Math.pow((c1.l-c2.l),2)+Math.pow((c1.a-c2.a),2)+Math.pow((c1.b-c2.b),2))
        }
        UserDetails ["edgeWeight"]=edgwt;
        UserDetails ["paletteDistance"]=dist
        palettelist.push(UserDetails);
        }
   // console.log(palettelist);
    var json=JSON.parse(JSON.stringify(palettelist));

    return json;
}

function JSON2CSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';


        var head = array[0];

            for (var index in array[0]) {
                line += index + ',';

        }

        line = line.slice(0, -1);
        str += line + '\r\n';


    for (var i = 0; i < array.length; i++) {
        var line = '';


            for (var index in array[i]) {
              // row += '"' + arrData[i][index] + '",';
                line += '"'+array[i][index] + '",';
            }


        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;

}
