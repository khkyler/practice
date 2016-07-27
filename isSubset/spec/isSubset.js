/* global isSubset, describe, it, expect, should */

describe('isSubset()', function() {
    'use strict';

    it('exists', function() {
        expect(isSubset).to.be.a('function');

    });

    it('tests an array to see if it contains another array', function() {
        var a = ['commit','push'];

        expect(a.isSubsetOf(['commit','rebase','push','blame'])).to.equal(true);
    });

    it('works with duplicates in the array', function() {
        var b = ['merge','reset','reset'];

        expect(b.isSubsetOf(['reset','merge','add','commit'])).to.equal(true);
    });

    it('it returns false if it is not a subset', function() {
        var c = ['merge','reset','reset'];

        expect(c.isSubsetOf(['cat','dog','donkey','fish'])).to.equal(false);
    });

    it('extra credit, works with mixed array', function() {
        var b = ['chicken', 123, null];

        expect(b.isSubsetOf(['chicken', 6, null,'reverse', 'undefined', 123, 'pig'])).to.equal(true);
    });

    it('extra credit, works with mixed array that is not a subset', function() {
        var b = ['poop'];

        expect(b.isSubsetOf(['chicken', 6, null,'reverse', 'undefined', 123, 'pig'])).to.equal(false);
    });

    // Add more assertions here
});
