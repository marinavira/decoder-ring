// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {

  const standard = "abcdefghijklmnopqrstuvwxyz".split(""); //
  const cipher = [];
  function substitution(input, alphabet, encode = true) {

    const checkForRepeats = new Set(alphabet);
    if (alphabet === undefined || alphabet.length > 26 || alphabet.length < 26 || [...checkForRepeats].length < 26 || !alphabet ) 
    return false;
        
    alphabet.split("");
    if (encode)
    {
      for (let i = 0; i < 26; i++)
      {
        cipher[standard[i]] = alphabet[i];
        
      }
    } else
    {
      for (let i = 0; i < 26; i++)
      {
        cipher[alphabet[i]] = standard[i];
      }
    }
    let result = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return cipher[letter]
    })
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };