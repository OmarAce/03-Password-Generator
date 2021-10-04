// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var charset,

// Password Generator

function generatePassword() {

// Picking charset for Password
  var isLower = window.confirm("Use lowercase characters?");
  var isUpper = window.confirm("Use uppercase characters?");
  var isNumb = window.confirm("Use numbers?");
  var isSpec = window.confirm("Use special characters?");

// INCASE NO IS OPTION PICKED
  
  if (!islower && !isupper && !isnumb && !isspec) {
    console.log("Please pick a character type.")
  return};

// Picking Length for Password
  var userlength = window.prompt("Enter password length."); 

// Password Bad Inputs
  if ( 
    (userlength.includes(lowercase)) || (userlength.includes(uppercase)) || (userlength.includes(special)) 
    ) {
    window.alert("Please enter numbers only.")
  return}

  else if (userlength < 8 && userlength > 128) {
    window.alert("Please enter value between 8 and 128.")
  return};

  // Password Conditions
  // 4 Positives
  if (isLower && isUpper && isNumb && isSpec) {

      charset = lowercase.concat(uppercase, numbers, special);
  }

  console.log(charset);

}