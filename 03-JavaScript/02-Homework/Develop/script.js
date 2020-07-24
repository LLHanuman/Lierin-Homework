// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function passwordLength() {
  const span = prompt("How long would you like your new password to be? Please choose greater than 8 and less than 128.") 
    if(span < 8) {
    alert('Please enter a number above 8.')}
    if(span > 128) {
    alert('Please enter a number below 128.')}
}
passwordLength()


var letter = "";
var uppercase = "abcdefghijklmnopqrstuvwxyz";

while (letter.length < 6) {
  letter += uppercase[Math.floor(Math.random() * uppercase.length)];
} 


function getRandomUpper() {
  var uppercase = confirm ("Would you like uppercase letters in your password?")
   if (uppercase == true) {
    console.log(letter);
   }
 }
 getRandomUpper()

 var letter = "";
 var uppercase = "abcdefghijklmnopqrstuvwxyz";
 
 while (letter.length < 6) {
   letter += uppercase[Math.floor(Math.random() * uppercase.length)];
 } 

function getRandomLower() {
  var lowercase = confirm ("would you like lowercase letters in your password?")
  if (lowercase == true) { 
    console.log(letter);
}}
  getRandomLower()


function getRandomNumber() {
var number = confirm ("Would you like numbers in your password?")
  if (number == true) {
    for (var i = 0; i < 6; i++) {
      var num = Math.floor(Math.random() * 10) +1;
    console.log(num + i)
    }
  }}
  getRandomNumber()


var empty = "";
var symbol = "!@#$%&*";

while (empty.length < 5) {
  empty += symbol[Math.floor(Math.random() * symbol.length)];
} 


function getRandomSymbol() {
  var symbol = confirm ("Would you like symbols in your password??")
   if (symbol == true) {
    console.log(empty);
   }
 }
 getRandomSymbol()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function genPassword(getRandomLower, getRandomNumber, getRandomSymbol, getRandomUpper) {

}
document.getElementById(password)('5+6')

