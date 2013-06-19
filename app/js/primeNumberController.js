'use strict'


PrimeNumberApp.controller('PrimeNumberCtrl',
    function ($scope, $timeout, PrimeNumberService) {

    	//TODO: Validate upTo is numeric - is there an Angular way to do validation?
        $scope.findPrimesAction = function() {
        	$scope.primeCandidates = PrimeNumberService.init($scope.upTo);
        	$timeout(function () {
           		PrimeNumberService.findPrimes($scope.upTo)
        	}, 500);
        };

        // Events are only received if previous call to findPrimes occurs in a $timeout
        $scope.$on('foundNonPrime', function (event, primeCandidate, index) {
            $timeout(function () {
            	$scope.primeCandidates[index].crossedOut = true;
        	}, 2000);
        });

    });