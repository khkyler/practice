/* global mergeSort, describe, it, expect, should */

describe('mergeSort()', function () {
  'use strict';

  it('exists', function () {
    expect(mergeSort).to.be.a('function');

  });

  it('return empty array if input is empty', function () {
    expect(mergeSort([])).to.eql([]);
  });

  it('should sort a reversed array', function () {
    expect(mergeSort([6,5,4,3,2,1])).to.eql([1,2,3,4,5,6]);
  });

  it('should sort a shuffled array', function () {
    expect(mergeSort([4,3,6,5,1,2])).to.eql([1,2,3,4,5,6]);
  });

  it('should sort an odd indexed shuffled array', function () {
    expect(mergeSort([4,3,5,1,2])).to.eql([1,2,3,4,5]);
  });

});
