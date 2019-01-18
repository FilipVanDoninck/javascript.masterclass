import assert from 'assert';

describe('The object literal allows for new shorthands', () => {

    const x = 1;
    const y = 2;
  
    describe('with variables', () => {
      it('the short version for `{x: x}` is {x}', () => {
        const short = {x};
        assert.deepEqual(short, {x});
      });
      it('works with multiple variables too', () => {
        const short = {x, y};
        assert.deepEqual(short, {x, y});
      });
    });
    
    describe('with methods', () => {
      
      const func = () => func;
  
      it('using the name only uses it as key', () => {
        const short = {it};
        assert.deepEqual(short, {func: func});
      });
      
      it('a different key must be given explicitly, just like before ES6', () => {
        const short = {func};
        assert.deepEqual(short, {otherKey: func});
      });
      
      it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
        const short = {
          inlineFunc: 'I am inline'
        };
        assert.deepEqual(short.inlineFunc(), 'I am inline');
      });
    });
    
  });