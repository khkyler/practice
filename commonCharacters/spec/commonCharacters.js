/* global commonCharacters, describe, it, expect, should */

describe('commonCharacters()', function () {
  'use strict';

  it('exists', function () {
    expect(commonCharacters).to.be.a('function');
  });

  it('should return an empty string if no common characters', function () {
    expect(commonCharacters('abc', 'def')).to.equal('');
  });

  it('should return the common character', function () {
    expect(commonCharacters('abc', 'deb')).to.equal('b');
  });

  it('should work with strings of different lengths', function () {
    expect(commonCharacters('abc', 'defb')).to.equal('b');
  });

  it('should return all common characters', function () {
    expect(commonCharacters('abcdef', 'hibcjf')).to.equal('bcf');
  });

  // This one might need to be refactored later for more robustness
  it('should return common characters found in the order they first appeared with the first string taking priority', function () {
    expect(commonCharacters('abcdefhij', 'kljmanoped')).to.equal('ajde');
  });

  // Add more assertions here
});
