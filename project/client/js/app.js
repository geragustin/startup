angular.module("movieApp",["ngRoute"])
.config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller: "mainController",
		templateUrl: "templates/main.html"
	})
	.when("/movies",{
		controller: "movieController",
		templateUrl: "templates/movies.html"
	})
	.when("/movieList",{
	})
	.otherwise({ redirectTo: '/' });
});
