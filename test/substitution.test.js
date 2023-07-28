// Write your tests here!
const {expect} = require ("chai");
const substitutionModule = require("../src/substitution");


 describe ("substitution", () => {
    it ("should decode a message", () => {
        const actual = substitutionModule.substitution("hi", "qwertyuiopasdfghjklzxcvbnm");
        const expected = "io";
        expect(actual).to.eql(expected);
    });
    it ("should encode a message", () => {
        const actual = substitutionModule.substitution("thinkful", "qwertyuiopasdfghjklzxcvbnm");
        const expected = "ziofayxs";
        expect(actual).to.eql(expected);
    });

     it("should return false if the inputted alphabet is not exactly 26 characters", () => {
        const actual = substitutionModule.substitution("Is it the right length?", "oweijamxbnq");
        expect(actual).to.be.false;
     } );
   
     it ("should return false if the inputted alphabet has duplicate letters", () => {
        const actual = substitutionModule.substitution("Are there duplicates?", "qwertyuiopasdfghjklzxcvbnn");
        expect(actual).to.be.false
     });
   
     it ("should ignore capital letters", () => {
        const actual = substitutionModule.substitution ("Marina", "qwertyuiopasdfghjklzxcvbnm");
        const expected = "dqkofq";
        expect(actual).to.eql(expected);
     });
 });

