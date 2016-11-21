angular.module('Jokers')
  .controller('JokeCtrl', ['$scope', 'JokeService', function($scope, JokeService) {

    $scope.alljokes = [];

    $scope.getAllJokes = function() {
      JokeService.getAll().then(function(res) {
        console.log(res.data, 'jokes');
        $scope.alljokes = res.data.value;
      }, function(err) {})
    };
    $scope.getAllJokes();

    // $scope.getCategories = function() {
    //   JokeService.getJokeCategories().then(function(res) {
    //     console.log(res.data, 'categories');
    //     $scope.categories = res.data.value;
    //   }, function(err) {})
    // };
    // $scope.getCategories();

    $scope.getNerdy = function() {
      JokeService.getNerdyJokes().then(function(res) {
        console.log(res.data, 'nerdyjokes');
        $scope.alljokes = res.data.value;
      }, function(err) {});
    };

    $scope.getExplicit = function() {
      JokeService.getExplicitJokes().then(function(res) {
        $scope.alljokes = res.data.value;
      }, function(err) {});
    };

    $scope.chuckNorrisJokes = function() {
      JokeService.getJokesByChuckNorris().then(function(res) {
        $scope.alljokes = res.data.value;
      }, function(err) {});
    };

  }]);
