angular.module("movieApp")
.controller("mainController",function($scope){
   $scope.message = "This template will be used to display the main.html";
})
.controller("movieController",function($scope,$http){
var movies = null;

//Client Side
$scope.searchText = null;	
$scope.allMovies = function(){
 $http.get('/movieList').success(function(data){
 $scope.movies = data;movies = data;
 }); 	
}

$scope.allMovies();
$scope.byRate=function(){

 var copyMovies = movies;copyMovies.sort(function(movie1,movie2){
 var rate1 = new Date(movie1.imdbRating),
     rate2 = new Date(movie2.imdbRating);
if (rate2<rate1){	
	return -1;} 
else if(rate2>rate1){
		return 1;}
else{	
		return 0;
 }});
  $scope.movies = copyMovies;
  $scope.movies = $scope.movies.filter(function(movie){
  return movie.imdbRating;
  });
};

$scope.byDate=function(){
 var currentYear = new Date(),
     copyMovies = movies;
copyMovies.sort(function(movie1,movie2){
 var releasedDate1 = new Date(movie1.Released),
     releasedDate2 = new Date(movie2.Released);
if (releasedDate2<releasedDate1){
	return -1;} 
else if(releasedDate2>releasedDate1){
	return 1;}
else{
	return 0;}
 });
  $scope.movies = copyMovies;
  $scope.movies = $scope.movies.filter(function(movie){
  return movie.Released;});
 };


$scope.filter=function(keyEvent){
 if (keyEvent.which === 13){
var filter = $scope.iText;
var match = [];
 for (i=0; i<movies.length;i++){
  if (movies[i].Title.toLowerCase().indexOf(filter.toLowerCase())!=-1){
   match.push(movies[i]);
  }
  if (movies[i].Director.toLowerCase().indexOf(filter.toLowerCase())!=-1){
  	  match.push(movies[i]);
  }
  if (movies[i].Actors.toLowerCase().indexOf(filter.toLowerCase())!=-1){
   match.push(movies[i]);
  }
 }
  $scope.movies=match;
 }
};
//Working functions end here.
});