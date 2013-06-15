'use strict'

PrimeNumberApp.controller('PrimeNumberCtrl',
  function($scope, PrimeNumberService) {

  $scope.primeCandidates = PrimeNumberService.init(100);
});