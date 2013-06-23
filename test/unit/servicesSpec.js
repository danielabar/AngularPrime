'use strict';


describe('Prime Number Service', function() {

	beforeEach(module('PrimeNumberApp'));

	it('Service is defined', inject(function(PrimeNumberService) {
		expect(PrimeNumberService).toBeDefined();
  	}));

});
