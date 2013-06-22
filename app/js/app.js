'use strict';


var PrimeNumberApp = angular.module("PrimeNumberApp", ['ui.bootstrap']);

PrimeNumberApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/primeNumbers.html',
        controller: 'PrimeNumberCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: null
      })
      .otherwise({
        redirectTo: '/'
      });
  });

