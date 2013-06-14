'use strict'

//TODO: Inject service for primes
function PrimeNumberCtrl($scope) {

 	$scope.primeCandidates = [
    	{"value": 2,
     	"crossedOut": false},
    	{"value": 3,
     	"crossedOut": false},
    	{"value": 4,
     	"crossedOut": false}
  	];

};

// Minify support
PrimeNumberCtrl.$inject = ['$scope'];