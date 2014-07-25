// Functions for manipulating and producing sequences.
'use strict';

var localFunctions = function() {

    // This will be the object we export.
    var pub = {};

    /**
     * Just reverse the string.
     */
    pub.getReverse = function(sequence) {
        var result = '';
        for (var i = sequence.length - 1; i > -1; i--) {
            result += sequence[i];
        }
        return result;
    };

    /**
     * Gets an object mapping single character sequences to their complement.
     */
    pub.getComplementMap = function() {
        var result = {};
        // lower case.
        result.t = 'a';
        result.a = 't';
        result.c = 'g';
        result.g = 'c';
        // upper case
        result.T = 'A';
        result.A = 'T';
        result.C = 'G';
        result.G = 'C';
        // and now one-way conversion for u.
        result.u = 'a';
        result.U = 'A';
        return result;
    };

    /**
     * Get the complement of the sequence. If a character in the sequence is not a
     * valid base, returns 'unrecognized base: <offending base>'.
     */
    pub.getComplement = function(sequence) {
        var result = '';
        var map = pub.getComplementMap();
        for (var i = 0; i < sequence.length; i++) {
            var currentBase = sequence[i];
            var complementBase = map[currentBase];
            if (complementBase === undefined) {
                console.log('unrecognized base: ' + currentBase);
                return 'unrecognized base: ' + currentBase;
            } else {
                result += complementBase;
            }
        }
        return result;
    };

    /**
     * Reverse and complement the sequence.
     */
    pub.getReverseComplement = function(sequence) {
        var reverse = pub.getReverse(sequence);
        var result = pub.getComplement(reverse);
        return result;
    };

    return pub;
};

window.sequenceFunctions = localFunctions();
