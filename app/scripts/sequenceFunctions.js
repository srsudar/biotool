// Functions for manipulating and producing sequences.
'use strict';

var localFunctions = function() {

    // The regular expression for valid single characters.
    // For now this is just white space and digits.
    var validSingleCharacterRE = /\s|\d/;
    // The regular expression for a valid single digit.
    var digitRE = /\d/;
    
    // This will be the object we export.
    var pub = {};

    // This will be the object housing the private methods.
    var pri = {};

    /**
     * Return true if the base is a key on the map. This method is private
     * because, even though it is testable, we aren't going to export it. It
     * accepts a map in order to remain more efficient and not construct the
     * object with every call.
     */
    pri.isValidBase = function(character, map) {
        var complementChar = map[character];
        return complementChar !== undefined;
    };

    pri.ErrorInvalidBase = function ErrorInvalidBase(base) {
        this.name = 'ErrorInvalidBase';
        this.invalidBase = base;
    };

    /**
     * Returns true if the character is a digit, else false.
     */
    pub.isDigit = function(character) {
        return character.match(digitRE) !== null;
    };

    /**
     * Take the base and a valid complement map. Returns the value that should
     * be appended to a valid base string. If the base is a valid non base, the
     * empty string is returned. If it is a base and isComplement is true,
     * return the complement, else return the base. If the character is not a
     * base and is not a valid non base character, return null.
     *
     * In other words, if this is null, you've encountered a bad base and you
     * should return the unrecognized base message. Otherwise, just append it
     * to your output.
     */
    pri.getValidCharacterToAppend = function(character, map, isComplement) {
        if (pri.isValidBase(character, map)) {
            if (isComplement) {
                return map[character];
            } else {
                return character;
            }
        } else if (pub.isValidNonBase(character)) {
            // We will get rid of digits, but leave whitespace.
            if (pub.isDigit(character)) {
                return '';
            } else {
                // It must be whitespace.
                return character;
            }
        } else {
            // We've encountered an invalid base.
            return null;
        }
    };

    /**
     * Remove all white space and digits. Intended to permit easier copying
     * from sequences that include digits or delimiting spaces.
     */
    pub.getClean = function(sequence) {
        var result = '';
        var complementMap = pub.getComplementMap();
        for (var i = 0; i < sequence.length; i++) {
            var currentChar = sequence[i];
            var toAppend = pri.getValidCharacterToAppend(
                    currentChar,
                    complementMap,
                    false);
            if (toAppend === null) {
                throw new pri.ErrorInvalidBase(currentChar);
            } else {
                result += toAppend;
            }
        }
        return result;
    };

    /**
     * Reverse the string, cleaning for valid bases as we go. If an invalid
     * string is encountered, we return the standard invalid response result.
     */
    pub.getReverse = function(sequence) {
        var result = '';
        var complementMap = pub.getComplementMap();
        for (var i = sequence.length - 1; i > -1; i--) {
            var currentChar = sequence[i];
            var toAppend = pri.getValidCharacterToAppend(
                    currentChar,
                    complementMap,
                    false);
            if (toAppend === null) {
                throw new pri.ErrorInvalidBase(currentChar);
            } else {
                result += toAppend;
            }
        }
        return result;
    };

    pub.isValidNonBase = function(character) {
        // we are going to accept whitespace and numbers.
        // We're going to rely on the regular expression defined above.
        // String.match returns null if there is no match.
        return character.match(validSingleCharacterRE) !== null;
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
        var complementMap = pub.getComplementMap();
        for (var i = 0; i < sequence.length; i++) {
            var currentChar = sequence[i];
            var toAppend = pri.getValidCharacterToAppend(
                    currentChar,
                    complementMap,
                    true);
            if (toAppend === null) {
                throw new pri.ErrorInvalidBase(currentChar);
            } else {
                result += toAppend;
            }
        }
        return result;
    };

    /**
     * Reverse and complement the sequence.
     */
    pub.getReverseComplement = function(sequence) {
        var result = '';
        var complementMap = pub.getComplementMap();
        for (var i = sequence.length - 1; i > -1; i--) {
            var currentChar = sequence[i];
            var toAppend = pri.getValidCharacterToAppend(
                currentChar,
                complementMap,
                true);
            if (toAppend === null) {
                throw new pri.ErrorInvalidBase(currentChar);
            } else {
                result += toAppend;
            }
        }
        return result;
    };

    return pub;
};

window.sequenceFunctions = localFunctions();
