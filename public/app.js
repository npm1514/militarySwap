angular.module('militarySwap',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "./views/home.html"
  }).state('listings', {
    url: "/listings/:cat/:subcat",
    templateUrl: "./views/listings.html"
  }).state('listing', {
    url: "/listings/:cat/:subcat/:listingId",
    templateUrl: "./views/listings.html"
  }).state('search', {
    url: "/search/:searchTerm",
    templateUrl: "./views/search.html"
  });
});
