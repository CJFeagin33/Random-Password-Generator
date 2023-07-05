// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {


  var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "U", "V", "W", "Z", "Y", "Z"]
  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "=", "_", "<", ">", "?", ":", "~"]
  var pass = []
  var finalPassword = []

  var passwordLength = prompt("How many characters long would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error: Passwords must be between 8 and 128 characters long.");
    return;
  } else {
    alert("your password will be " + passwordLength + " characters long.");
  }

  var lowercase = confirm("would you like lowercase characters in your password?")
  if (lowercase === true) {
    alert("Your password will contain lowercase characters.");
  } else {
    alert("Your password will not contain any lowercase characters.");
  }

  var uppercase = confirm("would you like uppercase characters in your password?")
  if (uppercase === true) {
    alert("Your password will contain uppercase characters.");
  } else {
    alert("Your password will not contain any uppercase characters.");
  }

  if (lowercase === false && uppercase === false) {
    alert("Error: must have at least lowercase or uppercase characters.")
    return
  }

  var numeric = confirm("would you like numeric characters in your password?")
  if (numeric === true) {
    alert("Your password will contain numeric characters.");
  } else {
    alert("Your password will not contain any numeric characters.");
  }

  var special = confirm("would you like special characters in your password? (ie. !@#$%^&)")
  if (special === true) {
    alert("Your password will contain special characters.");
  } else {
    alert("Your password will not contain any special characters.");
  }

  if (lowercase === true) {
    pass = pass.concat(lowerCaseChars)
  }

  if (uppercase === true) {
    pass = pass.concat(upperCaseChars)
  }

  if (numeric === true) {
    pass = pass.concat(numericChars)
  }

  if (special === true) {
    pass = pass.concat(specialChars)
  }

  console.log(pass)

  for (var i = 0; i < passwordLength; i++) {
    finalPassword[i] = pass[Math.floor(Math.random() * pass.length)]
  }
  return finalPassword.join("")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
