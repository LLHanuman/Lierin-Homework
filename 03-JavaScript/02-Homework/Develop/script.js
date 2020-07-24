// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatedPassword = ""

// Write password to the #password input



var symbol = '!@#$%^&*()'
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var number = '0123456789'


function completePassword() {
  var askLength = prompt ('How long would you like your password to be?')
    if (askLength < 8) {
      alert('Please choose a number higher than 8.')
    }
    if (askLength > 128) {
      alert('Please choose a number lower than 128.')
    }
  passLength = askLength;

  var askAlphabet = confirm ('Would you like Uppercase letters in your password?')
  if (askAlphabet == true) {
    addAlpha = alphabet
  }
  if (askAlphabet == false) {
    addAlpha = ''
  }

  var askNumber = confirm('Would you like numbers in your password?')
  if (askNumber == true){
    passWNum = number
  }
  if (askNumber == false){
    passWNum = ''
  }

  var askSymbol = confirm('Would you like symbols in your password?')
    if (askSymbol == true) {
      passWSym = symbol
  }  
    if (askSymbol == false) {
      passWSym = ''
  }


String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

var sumAll = (addAlpha + passWSym + passWNum).shuffle();
alert('Your new password is: ' + sumAll)
}
completePassword()



// if (completePassword() == '') {
//   alert('You need to select something.')
// }
// alert('Your new password is')

  

// whats the lenght of password
// save as length variable
// save a password variable
// for loop that loops length number of times and do some functionality

//  var number = confirm ("Would you like numbers in your password?")
//  var letter = confirm ("Would you like numbers in your password?")
//  var symbol = confirm ("Would you like numbers in your password?")

// for(var i=0; i < length; i++) {

// based on options generate password and add to password global variable

//}

// scramble after 