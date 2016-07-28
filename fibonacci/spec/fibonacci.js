/* global fibonacci, describe, it, expect, should */

describe('fibonacci()', function () {
  'use strict';

  it('exists', function () {
    expect(fibonacci).to.be.a('function');

  });

  it('1st term to be 0', function () {
    expect(fibonacci(1)).to.equal(0);
  });

  it('2nd term to be 1', function () {
    expect(fibonacci(2)).to.equal(1);
  });

  it('the nth term to equal the sum of the previous two terms', function () {
    expect(fibonacci(3) + fibonacci(4)).to.equal(fibonacci(5));
  });

  it('8th term to be 13', function () {
    expect(fibonacci(8)).to.equal(13);
  });

  it('can calculate the 47th term', function () {
    expect(fibonacci(47)).to.equal(1836311903);
  });

});
