'use strict';


describe('Prime Number Service', function() {

	beforeEach(module('PrimeNumberApp'));

	it('Service is defined', inject(function(PrimeNumberService) {
		expect(PrimeNumberService).toBeDefined();
  	}));

  	it('init creates array of prime number candidates', inject(function(PrimeNumberService) {
  		var upTo = 10;
  		var actual = PrimeNumberService.init(upTo);
		expect(actual.length).toEqual(upTo-1);
  	}));

});
