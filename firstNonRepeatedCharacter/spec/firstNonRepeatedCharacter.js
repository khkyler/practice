/* global firstNonRepeatedCharacter, describe, it, expect, should */

describe('firstNonRepeatedCharacter()', function () {
  'use strict';

  it('exists', function () {
    expect(firstNonRepeatedCharacter).to.be.a('function');

  });

  it('should output null if no characters are repeating', function () {
    expect(firstNonRepeatedCharacter('aabb')).to.be.null;
  });

  it('should return the non-repeated character', function () {
    expect(firstNonRepeatedCharacter('aba')).to.equal('b');
  });
  
  it('should return the first non-repeated character', function () {
    expect(firstNonRepeatedCharacter('aabqcdcdbi')).to.equal('q');
  });

  // Add more assertions here
});
