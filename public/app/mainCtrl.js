angular.module("militarySwap").controller("mainCtrl", function($scope, $state, mainServ) {
  //set $scope vars
  $scope.allLocations = [];
  $scope.selectedCountry = "";
  $scope.selectedState = "";
  $scope.selectedLocation = "";
  $scope.locationSelected = false;

  //set vars
  var loc = window.location || {};
    var href = loc.href || "";
    var origin = loc.origin || "";
    var hash = loc.hash || "";
      var hashSplit = hash ? hash.split('#/') : [];
  var cookieObj = {location: "",p1: "",p2: "",em: ""};
  var cookies = document.cookie || "";
  cookies.split('; ').map(function(x){return cookieObj[x.split('=')[0]] = x.split('=')[1]});


  $scope.getLocations = function(){
    mainServ.getLocations()
    .then(function(res){
      res.map(function(resx){
        var foundCountry = $scope.allLocations.find(function(countryx){return countryx.country == resx.country;});
        if(foundCountry){
          var foundState = foundCountry.states.find(function(statex){return statex.state == resx.state;});
          if(foundState){
            var foundLocation = foundState.locations.find(function(locationx){return locationx.locationid == resx._id;})
            if(!foundLocation) foundState.locations.push({location: resx.location,locationid: resx._id});
          } else foundCountry.states.push({state: resx.state,locations: [{location: resx.location,locationid: resx._id}]});
        } else $scope.allLocations.push({country: resx.country,states: [{state: resx.state,locations: [{location: resx.location,locationid: resx._id}]}]});
      });
    });
  }
  $scope.myFunc = function(value, option){
    if(option == "country") $scope.selectedCountry = value;
    else if(option == "state") $scope.selectedState = value;
    else if(option == "location") $scope.selectedLocation = value;
  };
  $scope.selectLocation = function(location){
    mainServ.getOneLocation(location.locationid)
    .then(function(res){
      if(res.length){
        $scope.currentCity = res[0];
        $scope.locationSelected = true;
      }
    });
  };
  $scope.deleteLocationCookie = function(){
    document.cookie = 'location=;';
    $scope.currentCity.location = 'All Locations';
  }

  $scope.getAllAds = function(){
    mainServ.getAllAds()
    .then(function(res){
      $scope.data = res;
    })
  }



  //get autolocation
  // if(hash == "#/chooseLocation") $scope.getLocations();
  // else if(cookieObj.location){
  //   if(cookieObj.location != undefined){
  //     mainServ.getOneLocation(cookieObj.location)
  //     .then(function(res){
  //       if(res.length){
  //         $scope.currentCity = res[0];
  //         window.location.href = origin + '/#/' + res[0]._id;
  //       } else $scope.getLocations();
  //     });
  //   }
  // } else if (hashSplit.length > 1){
  //   if(hashSplit[1] != undefined){
  //     mainServ.getOneLocation(hashSplit[1])
  //     .then(function(res){
  //       if(res.length){
  //         $scope.currentCity = res[0];
  //         document.cookie = "location=" + res[0]._id;
  //       } else $scope.getLocations();
  //     });
  //   }
  // } else $scope.getLocations();
});
