'use strict';


describe('Prime Number Service: ', function() {

	beforeEach(module('PrimeNumberApp'));
	var service;
	beforeEach(inject(function(PrimeNumberService) {
    	service = PrimeNumberService;
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
	  		}
	  	});

  	});

  	

});
