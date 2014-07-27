// Functions for manipulating and producing sequences.
'use strict';

var localFunctions = function() {

    // The regular expression for valid single bases.
    // For now this is just white space and digits.
    var validSingleBaseRE = /\s|\d/;

    // This will be the object we export.
    var pub = {};

    /**
     * Remove all white space and digits. Intended to permit easier copying
     * from sequences that include digits or delimiting spaces.
     */
    pub.getClean = function(sequence) {
        var result = '';
        var complementMap = pub.getComplementMap();
        for (var i = 0; i < sequence.length; i++) {
            var currentChar = sequence[i];
            var complementChar = complementMap[currentChar];
            // We will only accept valid bases or valid non-bases.
            if (complementChar === undefined) {
                // If it IS a valid non base, we just won't do anything.
                if (!pub.isValidNonBase(currentChar)) {
                    return 'unrecognized base: ' + currentChar;
                }
            } else {
                result += currentChar;
            }
        }
        return result;
    };

    /**
     * Just reverse the string.
     */
    pub.getReverse = function(sequence) {
        var result = '';
        var map = pub.getComplementMap();
        
        for (var i = sequence.length - 1; i > -1; i--) {
            result += sequence[i];
        }
        return result;
    };

    pub.isValidNonBase = function(character) {
        // we are going to accept whitespace and numbers.
        // We're going to rely on the regular expression defined above.
        // String.match returns null if there is no match.
        return character.match(validSingleBaseRE) !== null;
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
                // Only protest if it is an invalid non-base.
                if (!pub.isValidNonBase(currentBase)) {
                    console.log('unrecognized base: ' + currentBase);
                    return 'unrecognized base: ' + currentBase;
                }
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
