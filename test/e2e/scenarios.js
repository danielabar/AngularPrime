'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Prime Number App', function() {

	describe('Navigation', function() {

		it('index.html is the initial view', function() {
    		browser().navigateTo('../../app/index.html');
    		expect(browser().location().url()).toBe('/');
  		});

	});	

});	