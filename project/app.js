var express = require('express'),
url = require('url'),
app = express(),
movies = require("./server/data/data.js"),
port = 3000;

app.use(express.static(__dirname +'/client'));                 // set the static files location
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/client/index.html');
});

app.get('/movies', function (req, res) {
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
        console.log('entre a searchgen');
        var movies = searchByGenre(dataMovies, queryObj.gen);
        res.end(JSON.stringify(movies));
    }
    else if (queryObj == 'err') {
        res.end('noQuery');
    }
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
// http://localhost:3000/xxx/test=cosas
// http://localhost:3000/xxx/test=cosas?ss=ccc
app.get('/xxx/test:cosa', function (req, res) {
    res.end(JSON.stringify({a: req.params, b: req.query}));
});
// http://localhost:3000/xxx/string?param_1=1&param_2=2
app.get('/xxx/string', function (req, res) {
    res.end(JSON.stringify({a: req.params, b: req.query}));
});
var dataMovies = movies.movies;