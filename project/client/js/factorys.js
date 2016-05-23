angular.module('movieApp')
.factory('movies', ['$http', function($http) {
	return {
	    get: function(url) {
	      return $http.get(url);
	    }
    };
}]);