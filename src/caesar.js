// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift===0 || shift < -25 || shift > 25 || shift ===undefined)
{
  return false;
} //check the conditions that should return false

if (typeof input !== "string") {
  return false;}  //check if the input is a string, if not return false

let result = ""; //declare result variable as an empty string


if (encode===false) {
  shift = shift*-1;
} // if encode is false and we must decode, then the shift will be set as opposite


for (let i = 0; i < input.length; i++)  //Loop through the input string
{
  const letter = input[i].toLowerCase(); // Set each letter to lower case
  
  if (alphabet.includes(letter)) // if index letter from input is in the alphabet variable..
  {
    const letterIndex = alphabet.indexOf(letter); //declare a variable to reference the letter index 
    let shifted = letterIndex + shift; // declare a variable to reference the shifted index letter

    if (shifted > 25) //if shifted is greater than 25..
    {
      shifted += -26; // then shifted is subtraced by 26
    }

    if (shifted < 0 && shifted > -25) //if shifted is between 0 and -25..
    {
      shifted += 26; //then add 26 to shift
    }

    const decodedLetter = alphabet[shifted]; //declare variable for the decoded letter. Finds shifted in the alphabet string
    result += decodedLetter; // declared result variable to add each decoded letter
  
  } else {
    result +=letter; 
  }

}

return result;

}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
