/* global bubbleSort, describe, it, expect, should */

describe('bubbleSort()', function() {
    'use strict';

    it('bubbleSort exists and is a function', function() {
        expect(bubbleSort).to.be.a('function');

    });

    it('does something', function() {
        var res = bubbleSort();
        expect(Array.isArray(res)).to.equal(true);
    });

    it('sorts an array', function() {
        var res = bubbleSort([4,2,3,1]),
            sorted = res.slice(0);
        sorted = sorted.sort();
        for (var i = 0; i < res.length; i++) {
            expect(res[i]).to.equal(sorted[i]);
        }
    });

    // Add more assertions here
});
