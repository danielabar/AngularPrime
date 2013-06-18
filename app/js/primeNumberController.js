'use strict'


//FIXME get 'upTo' from user input
PrimeNumberApp.controller('PrimeNumberCtrl',
    function ($scope, $timeout, PrimeNumberService) {

        $scope.primeCandidates = PrimeNumberService.init(100);

        $timeout(function () {
           PrimeNumberService.findPrimes(100)
        }, 1000);

        // Events are only received if previous call to findPrimes occurs in a $timeout
        $scope.$on('foundNonPrime', function (event, primeCandidate, index) {
            console.log('foundNonPrime event was raised for candidate: ' + primeCandidate + ' at index: ' + index);
            $scope.primeCandidates[index].crossedOut = true;
        });

    });