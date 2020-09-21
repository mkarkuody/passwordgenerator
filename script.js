///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
// change this 1
function passwordGenerator() {
  var symbol = '"~?!@#$%^&*()_+:}|<>,'
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var number = '0123456789'
  var passwordLength = 0;
  var password = "";
}
var welcome = alert('              <==Welcome to the Password Generator ==>                        <==you can create a uniqe passwork fast and easy in this page==> ');


var properlength= false;
function askpasswordlength() {
  var pl = prompt('How many characters do you need in your password? (please choose between 8 to 128 characters)');
  return pl;
}
var passwordLength= askpasswordlength()
// 
while ( passwordLength < 8 ||   passwordLength > 128 ) {

  alert("please choose between 8 to 128 characters!")
  passwordLength= askpasswordlength() ;

};

if (passwordLength > 7 || passwordLength < 129) {

  var number = confirm('Do you like to have number(s) in your password?');
  var number = confirm('Do you like to have lowercase letter(s) in your password?');
  var number = confirm('Do you like to have uppercase letter(s) in your password?');
  var number = confirm('Do you like to have symbol(s) in your password?');
}
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");

}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) 
{
  choices = character.concat(number, lowerCase, upperCase);
}
// Else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = symbol.concat(number, upperCase);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = symbol.concat(number, upperCase);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = symbol.concat(lowerCase, upperCase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = number.concat(lowerCase, upperCase);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
  choices = symbol.concat(number);
} else if (confirmCharacter && confirmLowercase) {
  choices = symbol.concat(lowerCase);
} else if (confirmCharacter && confirmUppercase) {
  choices = symbol.concat(upperCase);
}
else if (confirmLowercase && confirmNumber) {
  choices = lowerCase.concat(number);
} else if (confirmLowercase && confirmUppercase) {
  choices = lowerCase.concat(upperCase);
} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(upperCase);
}
// Else if for 1 positive option
else if (confirmCharacter) {
  choices = symbol;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = lowerCase;
}
// Created space variable to fill uppercase conversion
else if (confirmUppercase) {
  choices = space.concat(upperCase);
};
// password variable is an array placeholder for user generated amount of length
var password = [];
function writePassword() {


  for (let i = 0; i < passwordlength; i++) {
    var randomNubmer = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNubmer, randomNubmer + 1);

  }
  document.getElementById("password").value = password
}

    // /* Add event listener to generate button
    // # Make a variable that targets the id for the generate button
    // # In the writePassword function:
    //     # Make call the generate password function
    //     # Make a variable that targets the password text box
    //     # Set the final password to the password text box
    // # Create a generate password function that includes:
    //     # Make a variable for uppercase characters
    //     # Make a variable for lowercase characters
    //     # Make a variable for special characters
    //     # Make a variable for numbers 
    //     # Make a variable for password length
    //     # Make a variable to hold all the characters a user chooses
    //     # Make a variable for the final password
    //     # create a while loop that will prompt a user to pick a password length 
    //     # until they have chosen a length between 8 and 128 that is a number
    //     # create a while loop that prompts a user to choose the different character 
    //     # types until they have chosen at least one type of character
    //     # write some conditional statements that check to see if a user has
    //     # chosen each specific character type
    //         # if they have, add those characters to the variable that holds all the 
    //         # characters a user chooses
    //         # add one of the characters to the final password string
    //     # write a for loop that adds a random character to the final password string
    //     # until it is the length the user has requested. 
// #  Add an event listener to the generate button  */
