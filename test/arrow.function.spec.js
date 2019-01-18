import assert from 'assert';

describe('arrow functions', () => {

    it('are shorter to write', () => {
      const func = () => {
        return 'I am func';
      };
      assert.equal(func(), 'I am func');
    });
  
    it('a single expression, without curly braces returns too', () => {
      const func = () => 'I return too';
      assert.equal(func, 'I return too');
    });
  
    it('one parameter can be written without parens', () => {
      const func = (p) => {p - 1};
      assert.equal(func(25), 24);
    });
  
    it.skip('many params require parens', () => {
      // const func = param, param1 => param + param1;
      assert.equal(func(23, 42), 23+42);
    });
  
    it('body needs parens to return an object', () => {
      const func = () => {iAm: 'an object'};
      assert.deepEqual(func(), {iAm: 'an object'});
    });
});