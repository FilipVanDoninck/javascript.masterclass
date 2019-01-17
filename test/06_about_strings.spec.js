const assert = require("assert");

describe.skip("About Strings (topics/06_about_strings.js)", function() {
  it("delimiters", function() {
    const singleQuotedString = "apple";
    const doubleQuotedString = "apple";
    assert.equal(
      __,
      singleQuotedString === doubleQuotedString,
      "are the two strings equal?"
    );
  });

  it("concatenation", function() {
    const fruit = "apple";
    const dish = "pie";
    assert.equal(
      __,
      fruit + " " + dish,
      'what is the value of fruit + " " + dish?'
    );
  });

  it("character Type", function() {
    const characterType = typeof "Amory".charAt(1); // typeof will be explained in about reflection
    assert.equal(__, characterType, "Javascript has no character type");
  });

  it("escape character", function() {
    const stringWithAnEscapedCharacter = "\u0041pple";
    assert.equal(
      __,
      stringWithAnEscapedCharacter,
      "what  is the value of stringWithAnEscapedCharacter?"
    );
  });

  it("string.length", function() {
    const fruit = "apple";
    assert.equal(__, fruit.length, "what is the value of fruit.length?");
  });

  it("slice", function() {
    const fruit = "apple pie";
    assert.equal(
      __,
      fruit.slice(0, 5),
      "what is the value of fruit.slice(0,5)?"
    );
  });
});
