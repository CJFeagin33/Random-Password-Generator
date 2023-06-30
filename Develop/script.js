// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function passwordConditions() {
  var passwordLength = prompt("How many characters long would you like your password to be?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error: Passwords must be between 8 and 128 characters long.");
  } else {
    alert("your password will be " + passwordLength + " characters long.");
  }

  var lowercase = confirm("would you like lowercase letters in your password?")
  if (lowercase === true) {
    alert("Your password will contain lowercase characters.");
  } else {
    alert("Your password will not contain any lowercase characters.");
  }

  var uppercase = confirm("would you like uppercase letters in your password?")
  if (uppercase === true) {
    alert("Your password will contain uppercase characters.");
  } else {
    alert("Your password will not contain any uppercase characters.");
  }

  if (lowercase === false && uppercase === false) {
    alert("Error: must have at least lowercase or uppercase characters.")
    return
  }

  var numeric = confirm("would you like numeric letters in your password?")
  if (numeric === true) {
    alert("Your password will contain numeric characters.");
  } else {
    alert("Your password will not contain any numeric characters.");
  }

  var special = confirm("would you like special letters in your password? (ie. !@#$%^&)")
  if (special === true) {
    alert("Your password will contain special characters.");
  } else {
    alert("Your password will not contain any special characters.");
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordConditions());
