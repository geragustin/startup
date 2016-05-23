angular.module('movieApp')
.controller('movieListCtrl', ['$scope', 'movies', function ($scope, movies) {
	movies.get('movies?search=order&by=all')
		.success(function(data) {
			$scope.movies = data;
		});
	$scope.sendRequest = function(url) {
		movies.get(url)
			.success(function(data) {
				$scope.movies = data;
			});
	};

	$scope.search = '';

	$scope.searchMov = function() {
		movies.get('movies?search=searchmov&Search='+$scope.search)
			.success(function(data) {
				$scope.movies = data;
			});
	};

	$scope.searchByGenre = function() {
		var form = document.getElementById("genreFilter");
		var elem = form.elements;
		var select = elem[0];
		var index = select.selectedIndex;
		var genre = select[index].value;
		movies.get('movies?search=gen&gen='+genre)
			.success(function(data) {
				$scope.movies = data;
			});
	};
}])
.controller('mainCtrl', ['$scope', 'movies', function ($scope, movies) {
	movies.get('movies?search=lastmov')
		.success(function(data) {
			$scope.movies = data;
		});
}])
.controller('movieCtrl', ['$scope', '$routeParams', '$http', function ($scope,$routeParams,$http) {
		$http.get('movies?search=id&id='+$routeParams.id)
			.success(function(data) {
				$scope.movie = data[0];
				console.log("Here is your movie")
				console.log($scope.movie)
			});
}])
.controller('addCtrl',function($scope){
        $scope.newMovie = {};

    	$scope.submit = function() {   
        console.log(this.newMovie);
    };
})