'use strict';


describe('Prime Number Service', function() {

	beforeEach(module('PrimeNumberApp'));
	var service;
	beforeEach(inject(function(PrimeNumberService) {
    	service = PrimeNumberService;
	}));

	it('Service is defined', function() {
		expect(service).toBeDefined();
  	});

  	it('Init creates array of prime number candidates, size one less than specified', function() {
  		var upTo = 10;
  		var actual = service.init(upTo);
		expect(actual.length).toEqual(upTo-1);
  	});

  	it('Init creates array of prime number candidates, starting at 2, ending at specified value', function() {
  		var upTo = 10;
  		var actual = service.init(upTo);
  		var actualStartValue = actual[0].value;
  		var actualEndValue = actual[actual.length-1].value;
		expect(actualStartValue).toEqual(2);
		expect(actualEndValue).toEqual(upTo);
  	});

  	it('Initially, all prime number candidates are NOT crossed out', function() {
  		var upTo = 10;
  		var actual = service.init(upTo);
  		for (var i = 0; i < actual.length; i++) {
  			expect(actual[i].crossedOut).toBe(false);
  		}
  	});

});
