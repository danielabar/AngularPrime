'use strict'


//FIXME get 'upTo' from user input
PrimeNumberApp.controller('PrimeNumberCtrl',
    function ($scope, $timeout, PrimeNumberService) {

        $scope.primeCandidates = PrimeNumberService.init(100);

        $timeout(function () {
            $scope.primeCandidates = PrimeNumberService.findPrimes(100)
        }, 1000);

        $scope.$on('foundNonPrime', function (event, primeCandidate) {
            console.log('foundNonPrime event was raised');
        });

    });