'use strict';


describe('Prime Number Controller', function() {

	beforeEach(module('PrimeNumberApp'));
	var scope, ctrl;
	beforeEach(inject(function($controller, $rootScope) {
    	scope = $rootScope.$new();
    	ctrl = $controller('PrimeNumberCtrl', {$scope: scope});
	}));

  	it('Controller is defined', function() {
    	expect(ctrl).not.toEqual(null);
  	});

  	it('Initially there are no alerts', function() {
  		expect(scope.alerts).toEqual([]);
  	});

});
