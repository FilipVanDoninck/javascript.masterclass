import chai from 'chai';
const expect = chai.expect;
import * as _ from '../src';

chai.should();

describe.only('Lodash library', () => {
  describe('identity', () => {
    it('Should return the same value that has been passed', () => {
      expect(_.identity(1)).equal(1);
      expect(_.identity({})).to.deep.equal({});
      expect(_.identity('Hackages')).to.deep.equal('Hackages');
    });
  });

  describe('first: does not mutate the collection', () => {
    const items = [1, 9, 10, undefined];

    it('Should throw an error if no argument is passed', () => {
      (() => {
        _.first();
      }).should.throw(Error);
    });

    it('Should return the first element of the collection', () => {
      expect(_.first(items)).equal(1);
    });

    it('Should return the first n elements when a second argument is passed', () => {
      expect(_.first(items, 0)).equal(1);
      expect(_.first(items, 1)).to.deep.equal([1]);
      expect(_.first(items, 2)).to.deep.equal([1, 9]);
    });
  });

  describe('last', () => {
    const items = [1, 9, 10, 'Hackages'];

    it('Should throw an error if no collection is passed', () => {
      (() => {
        _.last();
      }).should.throw(Error);
    });

    it('Should return the last element of the collection', () => {
      expect(_.last(items)).to.deep.equal('Hackages');
    });

    it('Should return the last n elements when a second argument is passed', () => {
      expect(_.last(items, 0)).equal('Hackages');
      expect(_.last(items, 1)).to.deep.equal(['Hackages']);
      expect(_.last(items, 2)).to.deep.equal([10, 'Hackages']);
    });
  });

  describe('isArray', function() {
    const items = [10, false, 'Hacklunch'];

    it('Should return true when passed an collection of elements', () => {
      expect(_.isArray(items)).equal(true);
      expect(_.isArray([])).equal(true);
    });

    it('Should return false when passed anything else', () => {
      expect(_.isArray('Bootcamp by Hackages')).to.equal(false);
      expect(_.isArray({})).to.equal(false);
      expect(_.isArray(12)).to.equal(false);
      expect(_.isArray(false)).to.equal(false);
    });

    it('arguments is not an Array', () => {
      isArray(items);

      function isArray() {
        expect(_.isArray(arguments)).to.equal(false);
      }
    });
  });

  describe('isDefined', function() {
    it('Happy path', function() {
      expect(_.isDefined([])).equal(true);
      expect(_.isDefined(12)).equal(true);
      expect(_.isDefined(0)).equal(true);
      expect(_.isDefined(false)).equal(true);
      expect(_.isDefined({})).equal(true);
      expect(_.isDefined([])).equal(true);
    });

    it('Should return false when passed a string', () => {
      let items;
      expect(_.isDefined(items)).equal(false);
    });
  });

  describe('isFunction', function() {
    it('Should return true when passed an anonymous function', () => {
      expect(_.isFunction(function() {})).equal(true);
    });

    it('Should return true when passed a named function', () => {
      const sum = function(x, y) {
        return x + y;
      };
      expect(_.isFunction(sum)).equal(true);
    });

    it('Should return true when passed a class', () => {
      class Book {}
      expect(_.isFunction(Book)).equal(true);
    });

    it('Should return false otherwise', () => {
      expect(_.isFunction({})).equal(false);
      expect(_.isFunction(12)).equal(false);
      expect(_.isFunction(undefined)).equal(false);
      expect(_.isFunction('Hacklunch')).equal(false);
      expect(_.isFunction([])).equal(false);
    });
  });

  describe('isNumber', () => {
    it('Should return true when passed any number', function() {
      expect(_.isNumber(12)).equal(true);
      expect(_.isNumber(1.2)).equal(true);
      expect(_.isNumber(12)).equal(true);
      expect(_.isNumber(0)).equal(true);
      expect(_.isNumber(-10)).equal(true);
    });

    it('Should return false otherwise', function() {
      expect(_.isNumber({})).equal(false);
      expect(_.isNumber([])).equal(false);
      expect(_.isNumber(NaN)).equal(false);
      expect(_.isNumber('')).equal(false);
      expect(_.isNumber('string')).equal(false);
      expect(_.isNumber('12')).equal(false);
    });
  });

  describe('isDate', () => {
    it('Should return true when passed a date', function() {
      expect(_.isDate(new Date('12/12/2017'))).equal(true);
    });
    it('Should return false otherwise', function() {
      expect(_.isNumber({})).equal(false);
      expect(_.isNumber(NaN)).equal(false);
      expect(_.isNumber({})).equal(false);
      expect(_.isNumber({})).equal(false);
    });
  });

  describe('forEach', () => {
    let identity;

    // beforeEach(() => {
    //   identity = spy(_, 'identity');
    // });
    // describe('for Array', () => {
    //   const items = [1, 9, 10, 'Hackages'];

    //   it('Should return undefined', () => {
    //     expect(_.forEach(items, _.identity)).is.undefined;
    //   });

    //   it('Should call the callback on every single item by passing the current item, the index and the initial collection', () => {
    //     _.forEach(items, identity);
    //     expect(identity.callCount).equal(4);
    //     expect(identity.calledWith(1, 0, items)).equal(true);
    //     expect(identity.calledWith(9, 1, items)).equal(true);
    //     expect(identity.calledWith(10, 2, items)).equal(true);
    //     expect(identity.calledWith('Hackages', 3, items)).equal(true);
    //     identity.reset();
    //   });
    // });

    // describe('for Object', () => {
    //   let identity = spy(_, 'identity');

    //   it('Should call the callback on every single key of the object', () => {
    //     const user = {
    //       name: 'Victor',
    //       role: 'Software Engineer',
    //       company: 'Hackages',
    //       city: 'Amsterdam',
    //       year: 2017
    //     };
    //     _.forEach(user, identity);
    //     expect(identity.callCount).equal(5);
    //     expect(identity.calledWith('Victor', 'name', user)).equal(true);
    //     expect(identity.calledWith('Software Engineer', 'role', user)).equal(
    //       true
    //     );
    //     expect(identity.calledWith('Hackages', 'company', user)).equal(true);
    //     expect(identity.calledWith('Amsterdam', 'city', user)).equal(true);
    //     expect(identity.calledWith(2017, 'year', user)).eq(true);
    //   });
    // });
  });

  describe('map', () => {
    it('should apply a function to every value in an array', () => {
      const squaredValues = _.map([4, 2, 3, 9], item => item * item);
      expect(squaredValues).to.deep.equal([16, 4, 9, 81]);
    });
    it('should apply a function to every key in an object', () => {
      const squaredValues = _.map(
        { name: 'Dasha', company: 'Hackages' },
        _.identity
      );
      expect(squaredValues).to.deep.equal(['Dasha', 'Hackages']);
    });
  });

  describe('find: find does not mutate the array on which it is called.', () => {
    it('Should throw an error if no predicate is passed', () => {
      (() => {
        _.find();
      }).should.throw(Error);
    });

    it('should return undefined if none of the elements match the predicate', () => {
      const isEven = num => num % 2 === 0;
      const evens = _.find([1, 3, 7, 5], isEven);
      expect(evens).is.undefined;
    });

    it('should return the first element that matchs the predicate', () => {
      const isOdd = num => num % 2 !== 0;
      const odds = _.find([10, 2, 3, 4, 5, 6], isOdd);
      expect(odds).equal(3);
    });
  });

  describe('reduce', () => {
    it('should be able to sum up an array', () => {
      const add = (tally, item) => tally + item;
      const total = _.reduce([1, 2, 3], add, 0);
      expect(total).to.equal(6);
    });
  });

  describe('extend', () => {
    it('returns the first argument', () => {
      const to = {};
      const from = {};
      const extended = _.extend(to, from);

      expect(extended).to.equal(to);
    });

    it('should extend an object with the attributes of another', () => {
      const to = {};
      const from = {
        a: 'b'
      };
      const extended = _.extend(to, from);

      expect(extended.a).to.equal('b');
    });

    it('should override properties found on the destination', () => {
      const to = {
        a: 'x'
      };
      const from = {
        a: 'b'
      };
      const extended = _.extend(to, from);

      expect(extended.a).to.equal('b');
    });

    it('should not override properties not found in the source', () => {
      const to = {
        x: 'x'
      };
      const from = {
        a: 'b'
      };
      const extended = _.extend(to, from);

      expect(extended.x).to.equal('x');
    });

    it('should extend from multiple source objects', () => {
      const extended = _.extend(
        {
          x: 1
        },
        {
          a: 2
        },
        {
          b: 3
        }
      );

      expect(extended).to.eql({
        x: 1,
        a: 2,
        b: 3
      });
    });

    it("in the case of a conflict, it should use the last property's values when extending from multiple source objects", () => {
      const extended = _.extend(
        {
          x: 'x'
        },
        {
          a: 'a',
          x: 2
        },
        {
          a: 1
        }
      );
      expect(extended).to.eql({
        x: 2,
        a: 1
      });
    });

    it('should copy undefined values', () => {
      const extended = _.extend(
        {},
        {
          a: void 0,
          b: null
        }
      );

      expect('a' in extended && 'b' in extended).to.be(true);
    });
  });
});
