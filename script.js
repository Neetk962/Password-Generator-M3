

// adding arrays 
var passwordsource = ""
var finalpassword = ""
var lowercasealphabet ="abcdefghijklmnopqrstuvwxyz"
var specialcharacters="!@#$%^&*"
var uppercasealphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//used if statements, used for loops to loop password source

function generatePassword() {
  var userChoice = parseInt(window.prompt("Enter a number between 8-128 characters"));
  if (userChoice>8 && userChoice <128) {
    var userChoice2 = window.confirm("include lowercase, uppercase, and special characters")
    passwordsource+=lowercasealphabet

    if (userChoice2) {
    passwordsource+=specialcharacters
    passwordsource+=uppercasealphabet
      
    // Used math.random to numbers for final password 
    }
    for (let index = 0; index < userChoice; index++) {
      finalpassword+= passwordsource.charAt(Math.floor(Math.random()*passwordsource.length))
    }
// used an alert to notify user that the number had to be in between 8-128
return finalpassword
  } else {
    alert("Please enter a number between 8-128!")
    return
  }
  
}

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);