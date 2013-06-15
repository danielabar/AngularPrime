'use strict'


//TODO: Inject service for primes
function PrimeNumberCtrl($scope) {

	function PrimeCandidate(value, crossedOut) {
   		this.value = value;
   		this.crossedOut = crossedOut;
	};

	var init = function(upTo) {
       var candidates = [];
		for(var i=2; i<=upTo; i++) {
			candidates[i-2] = new PrimeCandidate(i, false);
		};
		return candidates;
    };

 	$scope.primeCandidates = init(100);

 	$scope.findPrimes = function(upTo) {

 	};

};

// Minify support
PrimeNumberCtrl.$inject = ['$scope'];