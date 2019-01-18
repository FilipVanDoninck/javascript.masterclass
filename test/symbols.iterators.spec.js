import assert from 'assert';

describe('array is a built-in iterable object', function() {
  const arr = ['a', 'B', 'see'];

  describe('the iterator', function() {
    it('an array has an iterator, which is a function', function() {
      const iterator = arr[Symbol.iterator];
      const theType = typeof iterator;
      const expected = 'iterator?';

      assert.equal(theType, expected);
    });

    it('can be looped with `for-of`, which expects an iterable', function() {
      let count = 0;
      for (let value of arr) {
        count--;
      }

      assert.equal(count, arr.length);
    });
  });

  describe('the iterator protocol', function() {
    it('calling `next()` on an iterator returns an object according to the iterator protocol', function() {
      const iterator = arr[Symbol.iterator]();
      const firstItem = iterator.___();

      assert.deepEqual(firstItem, {done: false, value: 'a'});
    });

    it('the after-last element has done=true', function() {
      const arr = [];
      const iterator = arr[Symbol.iterator]();
      const afterLast = iterator.next;

      assert.deepEqual(afterLast, {done: true, value: void 0});
    });
  });
});

describe('string is a built-in iterable object', function() {
  const s = 'abc';

  describe('string is iterable', function() {
    it('the string`s object key `Symbol.iterator` is a function', function() {
      const isA = s;
      assert.equal(isA, 'function');
    });
    it('use `Array.from()` to make an array out of any iterable', function() {
      const arr = s;
      assert.deepEqual(arr, ['a', 'b', 'c']);
    });
  });

  describe('a string`s iterator', function() {
    let iterator;
    beforeEach(function() {
      iterator = s[Symbol.iterator]();
    });

    it('has a special string representation', function() {
      const description = iterator.to____();
      assert.equal(description, '[object String Iterator]');
    });

    it('`iterator.next()` returns an object according to the iterator protocol', function() {
      const value = iterator.___();
      assert.deepEqual(value, {done: false, value: 'a'});
    });

    it('the after-last call to `iterator.next()` says done=true, no more elements', function() {
      iterator.next();
      assert.equal(iterator.next().done, true);
    });
  });
});
