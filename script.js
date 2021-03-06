//generating random passowrd
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var upperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";

  var numbersChar = "1234567890";

  var specialChar = "!@#$%^&*()_+";

  var passwordLength = 0;

  var upper, lower, numbers, special = false;

  var password = "";

  var includedChars = "";



  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Enter a number for your password between 8-128");
  }

  while (!upper || !lower || !numbers || !special) {
    special = confirm("Would you like Special Characters?");
    numbers = confirm("Would you like Numbers?");
    lower = confirm("Would you like Lower Case characters?");
    upper = confirm("Would you like Upper Case characters?");

    if (special === true) {
      includedChars = includedChars.concat(special);
    }
    if (numbers === true) {
      includedChars = includedChars.concat(numbers);
    }
  
    if (lower === true) {
      includedChars = includedChars.concat(lower);
    }
  
    if (upper === true) {
      includedChars = includedChars.concat(upper);
    }
  
  }


  // Assignment Code

  for(var i=0; i < passwordLength; i++) {
    var index = Math.floor(math.random() * includedChars);
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


