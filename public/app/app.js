angular.module('militarySwap',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  // .state('chooseLocation', {
  //   url: "/chooseLocation",
  //   templateUrl: "./views/chooseLocation.html"
  // })
  // .state('homeByLocation', {
  //   url: "/:location",
  //   templateUrl: "./views/homeByLocation.html"
  // })
  .state('allLocations', {
    url: "/allLocations",
    templateUrl: "./views/allLocations.html"
  })
  .state('createAd', {
    url: "/createAd",
    templateUrl: "./views/createAd.html"
  })
  // .state('listings', {
  //   url: "/:location/listings/:cat/:subcat",
  //   templateUrl: "./views/listings.html"
  // })
  // .state('listing', {
  //   url: "/:location/listings/:cat/:subcat/:listingId",
  //   templateUrl: "./views/listings.html"
  // })
  // .state('search', {
  //   url: "/:location/search/:searchTerm",
  //   templateUrl: "./views/search.html"
  // });
  $urlRouterProvider.otherwise('/allLocations');
});
