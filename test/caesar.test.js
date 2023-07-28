// Write your tests here!

const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe ("caesar", () => {
    it ("should decode a string according to the shift value", () => {
        const actual = caesarModule.caesar("wKlqniXo", 3, false);
        const expected = "thinkful";
        expect(actual).to.eql(expected);
    });

    it ("should encode a string according to the shift value", () => {
        const actual = caesarModule.caesar("thinkful", -3);
        const expected = "qefkhcri";
    expect(actual).to.eql(expected);
    });

    it("should leave spaces in a string", () => {
        const actual = caesarModule.caesar("hello world!", 2);
        const expected = " ";
    expect(actual.charAt(5)).to.eql(expected);
    });

    it("should not change symbols", () => { 
        const actual = caesarModule.caesar("hello world!", 5);
        const expected = "!";
        expect(actual.charAt(11)).to.eql(expected);
    });

    it ("should wrap around the front of the alphabet", () => {
        const actual = caesarModule.caesar("world", 6);
        const expected = "c";
        expect(actual.charAt(0)).to.eql(expected);
    });

    it("should ignore capitalization of letters", () => {
        const actual = caesarModule.caesar("Marina", 3);
        const expected = "p";
        expect(actual.charAt(0)).to.eql(expected);
    });

    it ("should return false if shift is greater than 25", () => {
        const actual = caesarModule.caesar("False expectations, 30");
        expect (actual).to.be.false;
    });

    it ("should return false if shift is less than -25", () => {
        const actual = caesarModule.caesar("False expectations, -28");
        expect (actual).to.be.false;
    });

    it ("should return false if shift is 0", () => {
        const actual = caesarModule.caesar("False expectations, 0");
        expect (actual).to.be.false;
    });


    it("should return false if there is not shift parameter", () => {
        actual = caesarModule.caesar("False expectations");
        expect(actual).to.be.false;
    });

});



