'use strict';


PrimeNumberApp.factory('PrimeNumberService', function () {

    function PrimeCandidate(value, crossedOut) {
        this.value = value;
        this.crossedOut = crossedOut;
    };

    var PrimeNumberService = {}

    PrimeNumberService.init = function (upTo) {
        var candidates = [];
        for (var i = 2; i <= upTo; i++) {
            candidates[i - 2] = new PrimeCandidate(i, false);
        };
        return candidates;
    };

    return PrimeNumberService;

});