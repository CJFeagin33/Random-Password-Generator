// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // These arrays contain all the different characters that could possibly be within the generated password
  var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "R", "S", "T", "U", "V", "W", "Z", "Y", "Z"]
  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "=", "_", "<", ">", "?", ":", "~"]

  // These 2 arrays act as empty containers that will fill up with Chars Variables depending on user input
  var pass = []
  var finalPassword = []

  // Logic behind how long the password will be. Defined as passwordLength and used in the for loop as a parameter for how long the loop will run.
  var passwordLength = prompt("How many characters long would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error: Passwords must be between 8 and 128 characters long.");
    return;
  } else {
    alert("your password will be " + passwordLength + " characters long.");
  }

  // Logic behind determining if user would like certain types of characters in their password. 
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

  // Calls upon previously defined variables and test if their boolean value is true. If it is true, the array with the correlated character type gets added to the pass[] array.
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

  // This console log is what is within the pass[] array after user input. This array contains every possible character that could be generated in the final password
  console.log(pass)

  // This for loop generates the final password using the pass[] array. final password is stored as finalPassword[]
  for (var i = 0; i < passwordLength; i++) {
    finalPassword[i] = pass[Math.floor(Math.random() * pass.length)]
  }

  // Returns whats inside the finalPassword[] array as a single string without commas.
  return finalPassword.join("")
}

// function writePassword() is called when the button is clicked
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
