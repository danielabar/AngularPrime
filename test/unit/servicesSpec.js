'use strict';


describe('Prime Number Service', function() {

	beforeEach(module('PrimeNumberApp'));
	var service;
	beforeEach(inject(function(PrimeNumberService) {
    	service =PrimeNumberService;
	}));

	it('Service is defined', function() {
		expect(service).toBeDefined();
  	});

  	it('init creates array of prime number candidates', function() {
  		var upTo = 10;
  		var actual = service.init(upTo);
		expect(actual.length).toEqual(upTo-1);
  	});

});
