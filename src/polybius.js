// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
 
const polybiusModule = (function () {
  // you can add any code you want within this function scope
const encoder = {
a: 11, b: 21, c: 31, d: 41, e: 51,
f: 12, g: 22, h: 32, i: 42, j: 42, k: 52,
l: 13, m: 23, n: 33, o: 43, p: 53,
q: 14, r: 24, s: 34, t: 44, u: 54,
v: 15, w: 25, x: 35, y: 45, z: 55,
}  //declare encoder variable to match letters to numbers
  

const decoder = {
  11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
  12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k",
  13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
  14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
  15: "v", 25: "w", 35: "x", 45: "y", 55: "z", 
}  // declare decoder variable to match numbers to letters

  
  function polybius(input, encode = true) {
    // your solution code here
    
    
    input.toLowerCase();    //set all input characters to lower case
    let split;     //declare variable split
    let key = encoder;    //declare key variable as array in decoder
  
    
    if (encode) {      //if encode is set to true...
     
      split = input.split("");    //split variable is set to the split characters in input
    
    } else {     //if encode is set to false...
      key = decoder;
      split = input.split(" ");      //split variable is set to the split characters in input
      
      const oddNumbered = split.reduce((acc, array) => acc + array.length, 0) %2;     /* an invisible function is used to 
      check wether the returning string has an odd number of characters, not including spaces*/
      if(oddNumbered) {
      return false; 
      }

      split = split.map(section => {       //set split variable to invisible map function
       
        return section.split("").reduce((acc, char, index, collect) => { 
          
          if(char === " ") {       //if the current character is a space
            acc.push(" ");      //a space will be pushed into the accumulator
           
          } else if (!(index %2)) {   //check if the characters of index are odd
            acc.push(char + collect[index+ 1]); //the character index + 1 is pushed into the accumulator
            }
          
            return acc; 
          
          }, [])
        })

        .reduce((a, b) => a.concat(" ", b));    //reduce function used to return a single value
      }
      return split.map(char => key[char] || " ").join("");    //map function is used on split to make a new array containing the new string
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
