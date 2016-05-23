angular.module('movieApp',["ngRoute"])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
			templateUrl: 'templates/main.html',
			controller: 'mainCtrl'
		})
	.when('/main', {
			templateUrl: 'templates/main.html',
			controller: 'mainCtrl'
		})
	.when('/movie/:id', {
			templateUrl: 'templates/movie.html',
			controller: 'movieCtrl'
		})
	.when('/movielist', {
			templateUrl: 'templates/category.html',
			controller: 'movieListCtrl'
		})
	.when('/addMovie', {
			templateUrl: 'templates/addMovie.html',
			controller: 'addCtrl'
		})
	.otherwise({
			redirectTo: '/'
		});
});