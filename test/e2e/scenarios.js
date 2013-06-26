'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Prime Number App', function() {

	describe('Navigation', function() {

		it('index.html is the initial view', function() {
    		browser().navigateTo('../../app/index.html');
    		expect(browser().location().url()).toBe('/');
  		});

  		it('index.html is the default view', function() {
    		browser().navigateTo('../../app/index.html#foo');
    		expect(browser().location().url()).toBe('/');
  		});

	});	

	describe('Find Primes', function() {

		beforeEach(function() {
			browser().navigateTo('../../app/index.html');
    	});

    	it('No numbers are displayed before form has been submitted', function() {
      		expect(repeater('.allNumbers div').count()).toBe(0);
    	});

		it('When form is submitted for up to 10 prime numbers, numbers 2 through 10 are displayed', function() {
      		input('upTo').enter('10');
      		element('#findPrimes').click();
      		expect(repeater('.allNumbers div.primeCandidateDisplay').count()).toBe(9);
    	});

    	//TODO verify the non primes have the crossedOut css class

	});	

});	