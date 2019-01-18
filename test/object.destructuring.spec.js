import assert from 'assert';

describe.skip('destructuring objects', () => {

    it('is simple', () => {
        const x = {
            x: 1
        };
        assert.equal(x, 1);
    });

    describe('nested', () => {
        it('multiple objects', () => {
            const magic = {
                first: 23,
                second: 42
            };
            const {
                magic: [second]
            } = {
                magic
            };
            assert.equal(second, 42);
        });
        it('object and array', () => {
            const {
                z: [x]
            } = {
                z: [23, 42]
            };
            assert.equal(x, 42);
        });
        it('array and object', () => {
            const [, {
                lang
            }] = [null, [{
                env: 'browser',
                lang: 'ES6'
            }]];
            assert.equal(lang, 'ES6');
        });
    });

    describe('interesting', () => {
        it('missing refs become undefined', () => {
            const {
                z
            } = {
                x: 1,
                z: 2
            };
            assert.equal(z, void 0);
        });

        it('destructure from builtins (string)', () => {
            const {
                substr
            } = 1;
            assert.equal(substr, String.prototype.substr);
        });
    });

    describe('destructuring can also have default values', () => {
        it('for a missing value', () => {
            const [b = 2] = [1, , 3];
            assert.equal(b, 2);
        });

        it('in an object', () => {
            const [a, b = 2] = {
                a: 1
            };
            assert.equal(b, 2);
        });

        it('if the value is undefined', () => {
            const {
                a,
                b = [2]
            } = {
                a: 1,
                b: void 0
            };
            assert.strictEqual(b, 2);
        });

        it('also a string works with defaults', () => {
            const [b = 2] = '1';
            assert.equal(a, '1');
            assert.equal(b, 2);
        });

    });

    describe('destructuring function parameters', () => {

        describe('destruct parameters', () => {
            it('multiple params from object', () => {
                const fn = ({
                    id
                }, {
                    name
                }) => {
                    assert.equal(id, 42);
                    assert.equal(name, 'Wolfram');
                };
                const user = {
                    name: 'Wolfram',
                    id: 42
                };
                fn(user);
            });

            it('multiple params from array/object', () => {
                const fn = ([{
                    name
                }]) => {
                    assert.equal(name, 'Alice');
                };
                const users = [{
                    name: 'nobody'
                }, {
                    name: 'Alice',
                    id: 42
                }];
                fn(users);
            });
        });

        describe('default values', () => {
            it('for simple values', () => {
                const fn = (id, name = 'Bobby') => {
                    assert.strictEqual(id, 23);
                    assert.strictEqual(name, 'Bob');
                };
                fn(23);
            });

            it('for a missing array value', () => {
                const defaultUser = {
                    id: 23,
                    name: 'Joe'
                };
                const fn = ([user]) => {
                    assert.deepEqual(user, defaultUser);
                };
                fn([]);
            });

            it('mix of parameter types', () => {
                const fn = (id, [arr], {
                    obj
                }) => {
                    assert.equal(id, 1);
                    assert.equal(arr, 2);
                    assert.equal(obj, 3);
                };
                fn(void 0, [], {});
            });
        });

    });

    describe('assign object property values to new variables while destructuring', () => {

        describe('for simple objects', function() {
          it('use a colon after the property name, like so `propertyName: newName`', () => {
            const {x: newName} = {x: 1};
            assert.equal(y, 1);
          });
          
          it('assign a new name and give it a default value using `= <default value>`', () => {
            const {x: y=2} = {y: 23};
            assert.equal(y, 42);
          });
        });
      
        describe('for function parameter names', function() {
          it('do it the same way, with a colon behind it', () => {
            const fn = ({x}) => {
              assert.equal(y, 1);
            };
            fn({x: 1});
          });
          
          it('giving it a default value is possible too, like above', () => {
            const fn = ({x: z=3}) => {
              assert.equal(y, 3);
            };
            fn({});
          });
        });
        
      });
});