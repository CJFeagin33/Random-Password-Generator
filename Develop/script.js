// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters long would you like your password to be?");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Error: Passwords must be between 8 and 128 characters long.");
    } else {
      alert("your password will be " + passwordLength + " characters long.");
    }
  
  var lowerecase = prompt("Would you like your password to include lowercase characters?")
    if (lowerecase === "yes") {
      alert("Your password will contain lowercase characters.")
    } else if (lowerecase === "no") {
      alert("Your password will not contain any lowercase characters.")
    } else {
      alert("Error: answer was not a yes or no.")
    }

  var uppercase = prompt("Would you like your password to include uppercase characters?")
    if (uppercase === "yes") {
      alert("Your password will contain uppercase characters.")
    } else if (lowerecase === "no" && uppercase === "no") {
      alert("Error: Must select at least lowercase or uppercase characters.")
    } else if (uppercase === "no") {
      alert("Your password will not contain any uppercase characters.")
    } else {
      alert("Error: answer was not a yes or no.")
    }

  var numeric = prompt("Would you like your password to include numeric characters?")
    if (numeric === "yes") {
      alert("Your password will contain numeric characters.")
    } else if (numeric === "no") {
      alert("Your password will not contain any numeric characters.")
    } else {
      alert("Error: answer was not a yes or no.")
    }

  var special = prompt("Would you like your password to include special characters? (ie. !%#$&)")
    if (special === "yes") {
      alert("Your password will contain special characters.")
    } else if (special === "no") {
      alert("Your password will not contain any special characters.")
    } else {
      alert("Error: answer was not a yes or no.")
    }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
