'use strict';

// Declare app level module which depends on views, and components
angular.module('shopCart', [
  'ngRoute',
  'cart',
  'checkout'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/cart'});
}]);