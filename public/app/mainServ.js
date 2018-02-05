angular.module("militarySwap")
.service("mainServ", function($http) {
  // this.getBySearch = function(searchTerm){
  //   $http({
  //     method: 'GET',
  //     url: '/location'
  //   }).then(function(res){
  //     return res;
  //   })
  // };
  this.getOneLocation = function(id){
    return $http({
      method: 'GET',
      url: '/location?_id=' + id
    }).then(function(res){
      return res.data;
    });
  };
  this.getLocations = function(){
    return $http({
      method: 'GET',
      url: '/location'
    }).then(function(res){
      return res.data;
    })
  };
});
