angular.module("militarySwap").controller("mainCtrl", function($scope, $state, mainServ) {
  $scope.currentCity = "Salt Lake City";
  $scope.getBySearch = function(searchTerm){
    mainServ.getBySearch(searchTerm)
    .then(function(res){
      $scope.searchListings = res;
      $state.go('listings');
    });
  }
});
