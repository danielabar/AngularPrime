'use strict';

/* App Module */

angular.module('angularprime', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/primes', {templateUrl: 'partials/primes.html',   controller: PhoneListCtrl}).      
      otherwise({redirectTo: '/primes'});
}]);
