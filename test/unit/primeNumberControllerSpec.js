'use strict';


describe('Prime Number Controller', function() {

	var scope, ctrl;
	var mockPrimeNumberService = {
    	init: function (upTo) {
    		return [
    			{value: 2, crossedOut: false},
    			{value: 3, crossedOut: false},
    			{value: 4, crossedOut: false},
    			{value: 5, crossedOut: false},
    			{value: 6, crossedOut: false},
    			{value: 7, crossedOut: false},
    			{value: 8, crossedOut: false},
    			{value: 9, crossedOut: false},
    			{value: 10, crossedOut: false}
    		];
    	},
    	findPrimes: function(upTo) {
    		return [
    			{value: 2, crossedOut: false},
    			{value: 3, crossedOut: false},
    			{value: 4, crossedOut: true},
    			{value: 5, crossedOut: false},
    			{value: 6, crossedOut: true},
    			{value: 7, crossedOut: false},
    			{value: 8, crossedOut: true},
    			{value: 9, crossedOut: true},
    			{value: 10, crossedOut: false}
    		];
    	}
  	};

	beforeEach(module('PrimeNumberApp'));

	beforeEach(inject(function($controller, $rootScope, $timeout) {
    	scope = $rootScope.$new();
    	scope.upTo = 10;
    	ctrl = $controller('PrimeNumberCtrl', {
      		$scope: scope,
      		PrimeNumberService: mockPrimeNumberService,
      		$timeout: $timeout
    	});
	}));

  	it('Controller is defined', function() {
    	expect(ctrl).not.toEqual(null);
  	});

  	it('Initially there are no alerts', function() {
  		expect(scope.alerts).toEqual([]);
  	});

  	it('Initially there are no prime candidates', function() {
  		expect(scope.primeCandidates).toEqual(null);
  	});

  	it('Find Primes Action calls service iniialization', function() {
  		spyOn(mockPrimeNumberService, 'init');
  		scope.findPrimesAction();
  		expect(mockPrimeNumberService.init).toHaveBeenCalledWith(10);
  	});

  	it('Find Primes Action calls service to find primes', inject(function($timeout) {
  		spyOn(mockPrimeNumberService, 'findPrimes');
  		scope.findPrimesAction();
  		$timeout.flush();
  		expect(mockPrimeNumberService.findPrimes).toHaveBeenCalledWith(10);
  	}));

  	it('When non prime is found, it gets crossed out', inject(function($rootScope, $timeout) {
  		scope.primeCandidates = mockPrimeNumberService.init();
  		expect(scope.primeCandidates[2].crossedOut).toBe(false);
  		$rootScope.$broadcast('foundNonPrime', 2);
  		$timeout.flush();
  		expect(scope.primeCandidates[2].crossedOut).toBe(true);
  	}));

});
