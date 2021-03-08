//generating random passowrd
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var numbersChar = [0,1,2,3,4,5,6,7,8,9];

  var specialChar =  ['#','@','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','^','!','@','['];

  var passwordLength = 0;

  var upper, lower, special, numbers

  var password = "";

  var includedChars = [];


 //Promting user to pick a password length and accepted characters
 
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Enter a number for your password between 8-128");
    special = window.confirm("Would you like a special character?");
    numbers = window.confirm("Would you like a number character?");
    lower = window.confirm("Would you like a lower character?");
    upper = window.confirm("Would you like an upper character?");

  }
  if (special === false && numbers === false && lower === false && upper === false) {
    window.confirm("You must select at least one option")
    generatePassword();
  }

  if (special === true) {
    includedChars = includedChars.concat(specialChar)
  }
  if (numbers === true) {
    includedChars = includedChars.concat(numbersChar)
  }
  if (lower === true) {
    includedChars = includedChars.concat(lowerCase)
  }
  if (upper === true) {
    includedChars = includedChars.concat(upperCase)
  }
  // Assignment Code

  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * includedChars.length);
    var character = includedChars[index];
    password = password.concat(character);
  }

  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

