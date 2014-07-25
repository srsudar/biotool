/* global describe, it, assert, sequenceFunctions */

(function() {
    'use strict';

    var functions = sequenceFunctions;

    describe('reverse', function() {
        
        it('Exists on the object', function() {
            // do some asserstions here.
            assert.isFunction(functions.getReverse);
        });

        it('Returns same value for single character', function() {
            var target = 'a';
            var toReverse = 'a';
            var actual = functions.getReverse(toReverse);
            assert.equal(
                actual,
                target);
        });

        it('Reverses short sequence', function() {
            var toReverse = 'this should be reversed quite easily';
            var target = 'ylisae etiuq desrever eb dluohs siht';
            var actual = functions.getReverse(toReverse);
            assert.equal(
                actual,
                target);
        });

    });
})();
