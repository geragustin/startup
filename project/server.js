//Variables
var express  = require('express'),
app      = express(),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
fs = require("fs"),
port = 3000;

//Configs
app.use(express.static(__dirname + '/client'));                 // set the static files location
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/client/index.html');
});
app.get('/movieList', function (req, res) {
 fs.readFile( __dirname + "/" + "server/data/list.json", function (err, data) {
  res.end( data );
 });
});
app.get('/movieList/:id', function (req, res) {
 fs.readFile( __dirname + "/" + "server/data/list.json", function (err, data) {
  movies = JSON.parse( data );
  var movieById = [];
  for(var i=0; i<movies.length;i++){
  if (movies[i].id===parseInt(req.params.id)){
   movieById.push(movies[i]);
   }
  }
 res.end( JSON.stringify(movieById));
 });
});

//Server Port (3000)
app.listen(port);
console.log("The website is running on port: "+port);