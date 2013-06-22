'use strict';


var PrimeNumberApp = angular.module("PrimeNumberApp", ['ui.bootstrap']);

PrimeNumberApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/primeNumbers.html',
        controller: 'PrimeNumberCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

