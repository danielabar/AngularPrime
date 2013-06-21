'use strict'


PrimeNumberApp.controller('PrimeNumberCtrl',
    function ($scope, $timeout, PrimeNumberService) {

        $scope.findPrimesAction = function() {
            $scope.currentMultiple = null;
            $scope.completionMessage = null;
        	$scope.primeCandidates = PrimeNumberService.init($scope.upTo);
        	$timeout(function () {
           		PrimeNumberService.findPrimes($scope.upTo)
        	}, 100);
        };

        $scope.$on('processingMultiple', function (event, multipleValue) {
            $timeout(function () {
                $scope.currentMultiple = multipleValue;
            }, 10);
        });

        // Events are only received if previous call to findPrimes occurs in a $timeout
        $scope.$on('foundNonPrime', function (event, primeCandidate, index) {
            $timeout(function () {
                $scope.primeCandidates[index].crossedOut = true;
            }, 500);
        });

        $scope.$on('findPrimesComplete', function (event, primeCount) {
            $timeout(function () {
                $scope.currentMultiple = null;
            	$scope.completionMessage = 'Found ' + primeCount + ' primes up to ' + $scope.upTo;
        	}, 100);
        });

    });