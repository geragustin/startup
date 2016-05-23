var express = require('express'),
app = express(),
fs = require("fs"),
url = require('url'),
bodyParser = require('body-parser'),
http = require('http'),
request = require('request'),
port = 3000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname +'/client'));                 // set the static files location
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.post('/addMovie', function(req,res){
    fs.readFile(__dirname + '/server/data/movies.json' , 'utf8', function (err, data) {
        if (err) throw err;
        var dataMovies = JSON.parse(data);
 
        dataMovies.push(req.body);

        fs.writeFile(__dirname + '/server/data/movies.json', JSON.stringify(dataMovies), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The movie " + req.body.Title + " was added!");
            res.redirect('/#/main');
        });

    });    
});

app.get('/movies', function (req, res) {

    fs.readFile(__dirname + '/server/data/movies.json', 'utf8', function (err, data) {
        if (err) throw err;

        var dataMovies = JSON.parse(data);
        var queryObj = queryToObj(req.url);

        if (queryObj.search == 'searchmov') {
            var movies = searchMovies(dataMovies, queryObj.Search);
            res.end(JSON.stringify(movies));
        }
        else if (queryObj.search == 'order') {
            var movies = filter(dataMovies, queryObj.by);
            res.end(JSON.stringify(movies));
        }
        else if (queryObj.search == 'lastmov') {
            var movies = lastMovies(dataMovies,3);
            res.end(JSON.stringify(movies));
        }
        else if (queryObj.search == 'id') {
            var movies = searchByID(dataMovies, queryObj.id);
            res.end(JSON.stringify(movies));
        }
        else if (queryObj.search == 'gen') {
            var movies = searchByGenre(dataMovies, queryObj.gen);
            res.end(JSON.stringify(movies));
        }
        else if (queryObj == 'err') {
            res.end('noQuery');
        }
    });
});

app.listen(port);
console.log("The website is running on port: "+port);

function queryToObj(query) {
	var parsed = url.parse(query);
	if (parsed.query) {
		if (parsed.query.search('&') != -1) {
			var params = parsed.query.split('&');
		}
		else {
			var params = new Array(parsed.query);
		}
		var queryObj = new Array();
		for (x in params) {
			var toObj = params[x].split('=');
			queryObj[toObj[0]] = toObj[1];
		}
		return queryObj;
	}
	else {
		return 'err';
	}
}
function searchByID(obj,query) {
    var rest = new Array();
    for (x in obj) {
        if (obj[x].id == query){
            rest.push(obj[x]);
        }
    }
    return rest;
}

function lastMovies(obj,n) {
    obj.sort(function(a, b){return Number(b.Year)-Number(a.Year)});
    var lastReleases = obj.slice(0,n);
    return lastReleases;
}

function searchMovies(obj,query) {
    var rest = new Array();
    for (x in obj) {
        if ((obj[x].Title.toLowerCase().search(query) != -1) || (obj[x].Director.toLowerCase().search(query) != -1) || (obj[x].Actors.toLowerCase().search(query) != -1)) {
            rest.push(obj[x]);
        }
    }
    return rest;
}

function filter(obj,by) {
  var sorted = obj;
    if (by == 'all') {
        return sorted.sort(function(a, b){return Number(a.id)-Number(b.id)});
    }
    else if (by == 'recent') {
        return sorted.sort(function(a, b){return Number(b.Year)-Number(a.Year)});
    }
    else if (by == 'popular') {
        return sorted.sort(function(a, b){return Number(b.imdbRating)-Number(a.imdbRating)});
    }
    else {
        return -1;
    }
}

function searchByGenre(obj,query) {
    var rest = new Array();
    for (x in obj) {
        if (obj[x].Genre.search(query) != -1) {
            rest.push(obj[x]);
        }
    }
    return rest;
}