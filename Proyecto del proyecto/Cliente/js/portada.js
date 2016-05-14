 var multiApp = angular.module('new', []);

// create a controller
 multiApp.controller('aCtrl', ['$scope', '$controller', function ($scope, $controller) {
     $scope.movies =
        [{"Title":"Kill Bill","Year":"2003","Released":"10 Oct 2003","Runtime":"111 min","Genre":"Action","Director":"Quentin Tarantino","Actors":"Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah","Plot":"The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.","Language":"English, French, Japanese","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3._V1_SX300.jpg","imdbRating":"8.1","imdbVotes":"716,343","imdbID":"tt0266697"},
  		{"Title":"Ice","Year":"1998","Released":"22 Jul 2000","Runtime":"93 min","Genre":"Adventure","Director":"Jean de Segonzac","Actors":"Grant Show, Udo Kier, Eva LaRue, Flex Alexander","Plot":"After the whole North of the Equator freezes below zero, a group of people in Los Angeles risk their lives while trying to \"escape\" from the city's hostile conditions, in order to take a ship to a hotter place on Earth.","Language":"English","Poster":"http://ia.media-imdb.com/images/M/MV5BZTk2MTA4YmYtYjY0ZC00YmIwLWE0YjYtNDI2NDBhYmNkYmI2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg","imdbRating":"5.0","imdbVotes":"885","imdbID":"tt0160393"},
  		{"Title":"Nacho Libre","Year":"2006","Released":"16 Jun 2006","Runtime":"92 min","Genre":"Comedy","Director":"Jared Hess","Actors":"Jack Black, Ana de la Reguera, Héctor Jiménez, Darius Rose","Plot":"Berated all his life by those around him, a monk follows his dream and dons a mask to moonlight as a Luchador (Mexican wrestler).","Language":"English, Spanish","Poster":"http://ia.media-imdb.com/images/M/MV5BMjE1OTQxNTk4NV5BMl5BanBnXkFtZTcwNDQzMjYzMQ@@._V1_SX300.jpg","imdbRating":"5.7","imdbVotes":"64,580","imdbID":"tt0457510"},
  		{"Title":"Van Helsing","Year":"2004","Released":"07 May 2004","Runtime":"131 min","Genre":"Action","Director":"Stephen Sommers","Actors":"Hugh Jackman, Kate Beckinsale, Richard Roxburgh, David Wenham","Plot":"The notorious monster hunter is sent to Transylvania to stop Count Dracula who is using Dr. Frankenstein's research and a werewolf for some sinister purpose.","Language":"English, Latin","Poster":"http://ia.media-imdb.com/images/M/MV5BMTY0NjcyOTUxNV5BMl5BanBnXkFtZTYwNjMxNjc2._V1_SX300.jpg","imdbRating":"6.0","imdbVotes":"191,868","imdbID":"tt0338526"},
  		];
}]);

// create another controller
 multiApp.controller('bCtrl', ['$scope', '$controller', function ($scope, $controller) {
     $scope.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.';
 }]);

// and create another controller for banner in case to need it.
 multiApp.controller('cCtrl', ['$scope', '$controller', function ($scope, $controller) {
     $scope.any = '';
 }]);