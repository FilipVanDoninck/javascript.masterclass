const assert = require('assert');

describe('About Truthyness (topics/03_about_truthyness.js)', function() {
  it('truthyness of positive numbers', function() {
    const oneIsTruthy = 1 ? true : false;
    assert.equal(__, oneIsTruthy, 'is one truthy?');
  });

  it('truthyness of negative numbers', function() {
    const negativeOneIsTruthy = -1 ? true : false;
    assert.equal(__, negativeOneIsTruthy, 'is -1 truthy?');
  });

  it('truthyness of zero', function() {
    const zeroIsTruthy = 0 ? true : false;
    assert.equal(__, zeroIsTruthy, 'is 0 truthy?');
  });

  it('truthyness of null', function() {
    const nullIsTruthy = null ? true : false;
    assert.equal(__, nullIsTruthy, 'is null truthy?');
  });

  it('truthyness of undefined', function() {
    const nullIsTruthy = undefined ? true : false;
    assert.equal(__, nullIsTruthy, 'is null truthy?');
  });
});
