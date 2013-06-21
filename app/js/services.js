'use strict';


PrimeNumberApp.factory('PrimeNumberService', function ($rootScope) {

    function PrimeCandidate(value, crossedOut) {
        this.value = value;
        this.crossedOut = crossedOut;
    };

    var PrimeNumberService = {}

    var init = function (upTo) {
        var candidates = [];
        for (var i = 2; i <= upTo; i++) {
            candidates[i - 2] = new PrimeCandidate(i, false);
        };
        return candidates;
    };

    var findIndexOfFirstNotCrossedOut = function(candidates, startLookingFrom) {
        for (var j=startLookingFrom; j<candidates.length; j++) {
            if (candidates[j].crossedOut === false) {
                return j;
            }
        }
        return -1;
    }
    
    var crossOutMultiples = function(candidates, startingIndex, multipleValue) {
        $rootScope.$broadcast('processingMultiple', multipleValue);
        var howManyCrossedOut = 0;
        for (var i=startingIndex; i<candidates.length; i++) {           
            if (candidates[i].crossedOut === false && candidates[i].value % multipleValue === 0) {                
                candidates[i].crossedOut = true;
                howManyCrossedOut = howManyCrossedOut + 1;
               $rootScope.$broadcast('foundNonPrime', candidates[i], i);
            }
        }
        return howManyCrossedOut;
    }
    
    PrimeNumberService.findPrimes = function (upTo) {
        var potential = init(upTo)   
        var startingIndex = findIndexOfFirstNotCrossedOut(potential, 0);    
        var howManyCrossedOut = -1;     
        while(howManyCrossedOut !== 0) {
            howManyCrossedOut = crossOutMultiples(potential, startingIndex+1, potential[startingIndex].value);                 
            startingIndex = findIndexOfFirstNotCrossedOut(potential, startingIndex+1);                                  
        }   
        return potential;                  
    };

    PrimeNumberService.init = function(upTo) {
        return init(upTo);
    };

    return PrimeNumberService;

});