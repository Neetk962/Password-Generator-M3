



//used if statements, used for loops to loop password source

function generatePassword() {
  // adding arrays 
var passwordsource = ""
var finalpassword = ""
var lowercasealphabet ="abcdefghijklmnopqrstuvwxyz"
var specialcharacters="!@#$%^&*"
var uppercasealphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "123456789"

  var userChoice = parseInt(window.prompt("Enter a number between 8-128 characters"));
  if (userChoice>=8 && userChoice <=128) {
    var userlowercase = window.confirm("lowercase letters")
    var useruppercase = window.confirm("uppercase letters")
    var userspecialcharacters = window.confirm("special characters")
    var usernumbers = window.confirm("include numbers")

    if (userlowercase) {
      passwordsource+=lowercasealphabet

    }
    if (useruppercase) {
      passwordsource+=uppercasealphabet
   
      }
      if (userspecialcharacters) {
        passwordsource+=specialcharacters

        }

      if (usernumbers) {
        passwordsource+=numbers

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
  passwordText.value=""
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);