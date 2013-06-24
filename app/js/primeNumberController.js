'use strict'


PrimeNumberApp.controller('PrimeNumberCtrl',
    function ($scope, $timeout, PrimeNumberService) {

        $scope.alerts = [];

        $scope.findPrimesAction = function() {
            $scope.alerts = [];
        	$scope.primeCandidates = PrimeNumberService.init($scope.upTo);
        	$timeout(function () {
           		PrimeNumberService.findPrimes($scope.upTo)
        	}, 1000);
        };

        // Events are only received if previous call to findPrimes occurs in a $timeout
        $scope.$on('foundNonPrime', function (event, index) {
            $timeout(function () {
                $scope.primeCandidates[index].crossedOut = true;
            }, 500);
        });

        $scope.$on('findPrimesComplete', function (event, primeCount) {
            $timeout(function () {
                addAlert('Found ' + primeCount + ' primes up to ' + $scope.upTo);
        	}, 100);
        });

        var addAlert = function(infoMessage) {
            $scope.alerts.push({type: 'info', msg: infoMessage});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

    });