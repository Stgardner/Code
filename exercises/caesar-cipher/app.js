//Caesar Cipher Solution
//must install readline-sync to run (npm install readline-sync)

var readline = require('readline-sync');
var string = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var offset = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(offset, string) {
    
    var newString = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (var i = 0; i < string.length; i += 1) {
      var char = string[i].toLowerCase();
      var alphabetIndex = alphabet.indexOf(char);
      var newChar = alphabet[(alphabetIndex + offset) % alphabet.length];
      
      if (char === ' ') {
        newString += ' ';
      } else {
        newString += newChar;
      }
    }
    
    return newString;
  }
  
  console.log(caesarCipher(offset, string))
  