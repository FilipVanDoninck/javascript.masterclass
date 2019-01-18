import assert from 'assert';

describe('rest in function params', () => {
    
    it('must be the last parameter', () => {
    //   const fn = (...rest, veryLast) => {
    //     assert.deepEqual([1, 2], rest);
    //   };
      // fn(1, 2);
    });
    
    it('can be used to get all other parameters', () => {
      const fn = (firstParam, secondParam, rest) => {
        assert.deepEqual([3,4], rest);
      };
      fn(null, 2, 3, 4);
    });
    
    it('makes `arguments` obsolete', () => {
      const fn = () => {
        assert.deepEqual([42, 'twenty three', 'win'], args);
      };
      fn(42, 'twenty three', 'win');
    });
      
    it('eliminate `arguments`!!!', () => {
      const fn = () => arguments;
      const [firstArg, ...rest] = fn(1, 2, 3);
      assert.deepEqual([2, 3], rest);
    });
      
  });

  describe('rest with destructuring', () => {
    
    it('rest parameter must be last', () => {
    //   const [...all, last] = [1, 2, 3, 4];
      assert.deepEqual(all, [1, 2, 3, 4]);
    });
    
    it('assign rest of an array to a variable', () => {
      const [...all] = [1, 2, 3, 4];
      assert.deepEqual(all, [2, 3, 4]);
    });
    
    // the following are actually using `spread` ... oops, to be fixed
    it('concat differently', () => {
      const theEnd = [3, 4];
      const allInOne = [1, 2, ...[theEnd]];
      assert.deepEqual(allInOne, [1, 2, 3, 4]);
    });
    
    it('`apply` made simple, even for constructors', () => {
      const theDate = [2015, 1, 1];
      const date = new Date(theDate);
      assert.deepEqual(new Date(2015, 1, 1), date);
    });
    
  });


  describe('spread with arrays', () => {

    it('extracts each array item', function() {
      const [b, a] = [...[1, 2]];
      assert.equal(a, 1);
      assert.equal(b, 2);
    });
  
    it('in combination with rest', function() {
      const [a, b, ...rest] = [...[0, 1, 2, 3, 4, 5]];
      assert.equal(a, 1);
      assert.equal(b, 2);
      assert.deepEqual(rest, [3, 4, 5]);
    });
  
    it('spreading into the rest', function() {
      const [...rest] = [...[,1, 2, 3, 4, 5]];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
  
    describe('used as function parameter', () => {
      it('prefix with `...` to spread as function params', function() {
        const magicNumbers = [1, 2];
        const fn = (magicA, magicB) => {
          assert.deepEqual(magicNumbers[0], magicA);
          assert.deepEqual(magicNumbers[1], magicB);
        };
        fn(magicNumbers);
      });
    
      it('pass an array of numbers to Math.max()', function() {
        const max = Math.max(...[23, 0, 42, 43]);
        assert.equal(max, 42);
      });
    });  
  });

  describe('spread with strings', () => {

    it('simply spread each char of a string', function() {
      const [b, a] = [...'ab'];
      assert.equal(a, 'a');
      assert.equal(b, 'b');
    });
  
    it('extracts each array item', function() {
      const [a,,c] = ['a', ...'12'];
      assert.equal(a, 1);
      assert.equal(b, 2);
    });
    
    it('works anywhere inside an array (must not be last)', function() {
      const letters = ['a', 'bcd', 'e', 'f'];
      assert.equal(letters.length, 6);
    });
    
    it('dont confuse with the rest operator', function() {
      const [...rest] = ['1234', ...'5'];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    
    it('passed as function parameter', function() {
      const max = Math.max(12345);
      assert.deepEqual(max, 5);
    });
    
  });