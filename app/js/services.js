'use strict';


PrimeNumberApp.factory('PrimeNumberService', function () {

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
        var howManyCrossedOut = 0;
        for (var i=startingIndex; i<candidates.length; i++) {           
            if (candidates[i].crossedOut === false && candidates[i].value % multipleValue === 0) {                
                candidates[i].crossedOut = true;
                howManyCrossedOut = howManyCrossedOut + 1;
            }
        }
        return howManyCrossedOut;
    }
    
    var extractPrimes = function(candidates) {
        var primes = [];
        for (var j=0; j<candidates.length; j++) {
            if (candidates[j].crossedOut === false) {
                primes.push(candidates[j].value);              
            }
        }
        return primes;
    }   
    
    PrimeNumberService.findPrimes = function (upTo) {
        var potential = init(upTo)   
        console.log('potential = ' + potential);
        var startingIndex = findIndexOfFirstNotCrossedOut(potential, 0);    
        console.log('startingIndex = ' + startingIndex);
        var howManyCrossedOut = -1;     
        while(true) {
            howManyCrossedOut = crossOutMultiples(potential, startingIndex+1, potential[startingIndex].value);                 
            console.log('howManyCrossedOut = ' + howManyCrossedOut);
            if (howManyCrossedOut === 0) {
                break;
            }
            startingIndex = findIndexOfFirstNotCrossedOut(potential, startingIndex+1);                                  
            console.log('startingIndex = ' + startingIndex);
        }   
        return potential;                  
    }

    return PrimeNumberService;

});