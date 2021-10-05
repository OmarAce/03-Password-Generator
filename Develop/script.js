// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


// Output of Password
  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Charsets Choices

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var charset;

// Password Generator

function generatePassword() {

// Picking charsets for Password
  var isLower = window.confirm("Use lowercase characters?");
  var isUpper = window.confirm("Use uppercase characters?");
  var isNumb = window.confirm("Use numbers?");
  var isSpec = window.confirm("Use special characters?");

// INCASE NO IS OPTION PICKED
  
  if (!isLower && !isUpper && !isNumb && !isSpec) {
    alert("Please pick a character type.")
  return};

// Picking Length for Password
  var userlength = prompt("Enter password length bewtween 8 and 128."); 

// Password Invalid Length

if 
(userlength < 8 || userlength > 128) {
alert("Please enter a number in the range only.")
return}

  // Password Conditionals
  // Generates charset based upon user selection for password generation

  // 4 positives
  if (isLower && isUpper && isNumb && isSpec) {

      charset = lowercase.concat(uppercase, numbers, special);
  }
  
  // 3 positive
  else if (isLower && isUpper && isNumb) {
      charset = lowercase.concat(uppercase, numbers);
  }
  else if (isLower && isNumb && isSpec) {
      charset = lowercase.concat(numbers, special);
  }
  else if (isLower && isUpper && isSpec) {
      charset = lowercase.concat(uppercase, special);
  }
  else if (isUpper && isNumb && isSpec) {
      charset = uppercase.concat(numbers, special);
  }

  // 2 positive
  else if (isLower && isUpper) {
      charset = lowercase.concat(uppercase);
  } 
  else if (isLower && isNumb) {
      charset = lowercase.concat(numbers);
  } 
  else if (isLower && isSpec) {
      charset = lowercase.concat(special);
  } 
  else if (isUpper && isNumb) {
      charset = uppercase.concat(numbers);
  } 
  else if (isUpper && isSpec) {
      charset = uppercase.concat(special);
  } 
  else if (isNumb && isSpec) {
      choices = numbers.concat(special);
  }
  // 1 positive
  else if (isLower) {
      charset = lowercase;
  }
  else if (isUpper) {
      charset = uppercase;
  }
  else if (isNumb) {
      charset = numbers;
  }
  else if (isSpec) {
      charset = special;
  };

  // Generated Characters placed in array
  genpass = [];

  // Password variable defined to later have generated characters be joined into
  password = "";

  //  Loop for character generation based on userlength and chosen character set
  for (var i = 0; i < userlength; i++) {
    var randomchar = charset[Math.floor(Math.random() * charset.length)];
    genpass.push(randomchar);
  }

  // Joins generated characters into password
  password = genpass.join("");

return password}