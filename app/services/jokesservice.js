angular.module('Jokers')
  .factory('JokeService', ['$http', 'baseUrl', function($http, baseUrl) {
    var Joke = {
      getAll: function() {
        return $http.get(baseUrl + '/jokes/random/20')
      },
      getJokeCategories: function() {
        return $http.get(baseUrl + '/categories')
      },
      getExplicitJokes: function() {
        return $http.get(baseUrl + '/jokes/random/20/explicit')
      },
      getNerdyJokes: function() {
        return $http.get(baseUrl + '/jokes/random/20/nerdy')
      },
      getJokesByChuckNorris: function() {
        return $http.get(baseUrl + '/jokes/random/20/chucknorris')
      }
    }
    return Joke;
  }]);
