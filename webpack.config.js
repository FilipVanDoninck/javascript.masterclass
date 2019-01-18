const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'array-destructuring': './test/array.destructuring.spec.js',
    'arrow-function': './test/arrow.function.spec.js',
    'object-destructuring': './test/object.destructuring.spec.js',
    'object-literal': './test/object.literal.spec.js',
    'rest-operators': './test/rest.operators.spec.js',
    'string-destructuring': './test/string.destructuring.spec.js',
    'symbols-iterators': './test/symbols.iterators.spec.js'
  },
  output: {
    filename: '[name].spec.js',
    path: path.join(__dirname, 'test/dist')
  }
};
