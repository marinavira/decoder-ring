// Write your tests here!


const {expect} = require ("chai");
const polybiusModule = require("../src/polybius.js");

describe ("polybius", () =>  {
it ("should decode or encode a string according to the polybius square key", () => {
    const actual = polybiusModule.polybius("thinkful");
    const expected = "4432423352125413";
    expect(actual).to.eql(expected);
});

it ("should return false if returned string is odd numbered", () => {
    const actual = polybiusModule.polybius("215113134", false);
    expect(actual).to.be.false;

});

it ("should encode both i and j to 42", () => {
    const actual  = polybiusModule.polybius("jedi");
    const expected = "42514142";
    expect(actual).to.eql(expected);

});

it("should decode 42 to i/j", () => {
    const actual = polybiusModule.polybius("42514142", false);
    const expected = "i/jedi/j";
    expect(actual).to.eql(expected)
});

});