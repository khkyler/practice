/* global characterFrequency, describe, it, expect, should */

describe('tests characterFrequency() - ', function () {
  'use strict';

  it('characterFrequency exists and is a function', function () {
    expect(characterFrequency).to.be.a('function');

  });

  it('should return an array as its output', function () {
    var res = characterFrequency();
    expect(Array.isArray(res)).to.equal(true);
  });

  it('should find 4 unique characters for the string "mmmaaaiiibbb"', function () {
    expect(characterFrequency('mmmaaaiiibbb').length).to.equal(4);
  });

  it('for the string "mmmaaaiiibbb" should count `m` 3 times', function () {
    var res = characterFrequency('mmmaaaiiibbb');
    res.forEach(function (letter) {
        if (letter[0] === 'm') {
            expect(letter[1]).to.equal(3);
        }
    });
  });

  it('for the string "mmmaaaiiibbb" should count `a` 3 times', function () {
    var res = characterFrequency('mmmaaaiiibbb');
    res.forEach(function (letter) {
        if (letter[0] === 'i') {
            expect(letter[1]).to.equal(3);
        }
    });
  });

  it('for the string "mmmaaaiiibbb" should count `i` 3 times', function () {
    var res = characterFrequency('mmmaaaiiibbb');
    res.forEach(function (letter) {
        if (letter[0] === 'b') {
            expect(letter[1]).to.equal(3);
        }
    });
  });

  it('for the string "mmmaaaiiibbb" should count `b` 3 times', function () {
    var res = characterFrequency('mmmaaaiiibbb');
    res.forEach(function (letter) {
        if (letter[0] === 'b') {
            expect(letter[1]).to.equal(3);
        }
    });
  });

  it('for the string "mmmaaaiiibbb" sort the letters properly', function () {
    var res = characterFrequency('mmmaaaiiibbb'),
    sorted;

    sorted = res.slice(0);

    sorted = sorted.sort(function (a, b) {
        return a[0] >  b[0];
    });
    res.forEach(function (tuple, i) {
        expect(tuple[0]).to.equal(sorted[i][0]);
    });
  });
  // Add more assertions here
});
