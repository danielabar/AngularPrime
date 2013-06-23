'use strict';


describe('Prime Number Service: ', function() {

	beforeEach(module('PrimeNumberApp'));
	
	var service;
	beforeEach(inject(function(PrimeNumberService) {
    	service = PrimeNumberService;
	}));
	
	var rootScope;
	beforeEach(inject(function($injector) {
    	rootScope = $injector.get('$rootScope');
    	spyOn(rootScope, '$broadcast');
	}));

	it('Service is defined', function() {
		expect(service).toBeDefined();
  	});

  	describe('Initialization: ', function() {
  		var upTo, actual;
  		beforeEach(function() {
    		upTo = 10;
	  		actual = service.init(upTo);
		});
  		
  		it('Prime Candidates are created, size one less than specified', function() {
			expect(actual.length).toEqual(upTo-1);
  		});

	  	it('Prime Candidates start at 2 and end at specified value', function() {
	  		var actualStartValue = actual[0].value;
	  		var actualEndValue = actual[actual.length-1].value;
			expect(actualStartValue).toEqual(2);
			expect(actualEndValue).toEqual(upTo);
	  	});

	  	it('Prime Candidates are NOT crossed out', function() {
	  		for (var i = 0; i < actual.length; i++) {
	  			expect(actual[i].crossedOut).toBe(false);
	  		};
	  	});
  	});

  	describe('Find Primes Up To 10: ', function() {
  		var upTo, actual;
  		beforeEach(function() {
    		upTo = 10;
	  		actual = service.findPrimes(upTo);
		});
  		
  		it('Total number of candidates is 10', function() {
			expect(actual.length).toEqual(upTo-1);
  		});

  		it('There are 4 primes', function() {
  			var primeCount = 0;
			for (var i = 0; i < actual.length; i++) {
				if (actual[i].crossedOut === false) {
					primeCount = primeCount + 1;
				};
			};
			expect(primeCount).toEqual(4);
  		});

  		it('Primes of 10 are: 2, 3, 5, and 7', function() {
  			expect(actual[0].value).toEqual(2);
  			expect(actual[1].value).toEqual(3);
  			expect(actual[3].value).toEqual(5);
  			expect(actual[5].value).toEqual(7);
  		});

    	it("Find Primes broadcasts number of primes found", function() {
        	expect(rootScope.$broadcast).toHaveBeenCalledWith('findPrimesComplete', 4);
    	});

  	});

});
