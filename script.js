// Assignment code here

// Get references to the #generate element

const generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(){

  const characterLength = prompt("Enter your desired number of character.");

  if (characterLength<8){
    alert("Required length of 8 characters.");
    return "";
  }
  
  else if (characterLength>128) {
    alert("Maximum length of 128 characters.");
    return "";
  }
  
  const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("").sort();
  const uppercaseAlphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").sort();
  const numbers = "1234567890".split("").sort();
  const special = "!@#$%^&*()-_=+[{]}\|;:'/\",<.>/?~".split("").sort();

  const confirmUppercaseLetters = confirm("Would your password to contain uppercase letters?");
  const confirmLowercaseLetters = confirm("Would you like your password to contain lowercase letters?")
  const confirmNumbers = confirm("Would you like your password to contain numbers?");
  const confirmSpecial = confirm("Would you like your password to contain special characters?");

  let characterStitch = [];

  if (confirmUppercaseLetters){
    characterStitch = characterStitch.concat(uppercaseAlphabet);
  }

  if(confirmLowercaseLetters){
    characterStitch = characterStitch.concat(lowercaseAlphabet);
  }

  if(confirmNumbers){
    characterStitch = characterStitch.concat(numbers);
  }

  if(confirmSpecial){
    characterStitch = characterStitch.concat(special);
  }

  let password = "";

  for (let i = 0; i < characterLength; i++) {
    const randomize = Math.floor(Math.random() * characterStitch.length);
    password += characterStitch[randomize];
  }

  return password;

}

// Checks in characterLength exceeds or falls short of required length
function writePassword() {
  
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
    
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);