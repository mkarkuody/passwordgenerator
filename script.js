// created Variables and gave them strings, numbers ands Nulls
var generateBtn = document.querySelector("#generate")
var symbol = '"~?!@#$%^&*()_+:}|<>,"'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var passwordLength = 0;
var password = "";
var useSelection = "";
// created passwordGenerator Function to calculate and create my password?
function passwordGenerator() {
    var passwordLength = askpasswordlength()
    askCharectorType()
    for (let i = password.length; i < passwordLength; i++) {

        password += getrandomCharector(useSelection);

    }
    return password
}

// Created welcome alert
var welcome = alert('              <==Welcome to the Password Generator ==>                        <==you can create a uniqe passwork fast and easy in this page==> ');

var properlength = false;
// created askpasswordlength Function and made a prompt to make sure "users" choose between 8 and 128
function askpasswordlength() {

    var pl = prompt('How many characters do you need in your password? (please choose between 8 to 128 characters)');
    // return pl;
}
var passwordLength = askpasswordlength()
// created a while loop to keep asking user to follow the direction and chooce between 8 and 128
while (passwordLength < 8 || passwordLength > 128) {

    alert("please choose between 8 to 128 characters!")
    passwordLength = askpasswordlength();

};

// if (passwordLength > 7 || passwordLength < 129) {


// var numbersCh = confirm('Do you like to have number(s) in your password?');
// var lowerCaseCh = confirm('Do you like to have lowercase letter(s) in your password?');
// var upperCaseCh = confirm('Do you like to have uppercase letter(s) in your password?');
// var symbolCh = confirm('Do you like to have symbol(s) in your password?');
// }

// created a function to keep users on right path and have mutiple choices to creat there unique password 
askForSelect();
function askForSelect() {
    if (passwordLength > 7 || passwordLength < 129)

        var numbersCh = confirm('Do you like to have number(s) in your password?');
    var lowerCaseCh = confirm('Do you like to have lowercase letter(s) in your password?');
    var upperCaseCh = confirm('Do you like to have uppercase letter(s) in your password?');
    var symbolCh = confirm('Do you like to have symbol(s) in your password?');


    if (!numbersCh && !lowerCaseCh && !upperCaseCh && !symbolCh) {

        alert("please select at least one of these options number/ lowerCase/ upperCase/ symbol  ")
        askForSelect()
    };

    if (numbersCh) {
        password += getrandomCharector(numbers)
        useSelection += numbers
    }
    if (lowerCaseCh) {
        password += getrandomCharector(lowerCase)
        useSelection += lowerCase

    }
    if (upperCaseCh) {
        password += getrandomCharector(upperCase)
        useSelection += upperCase

    }
    if (symbolCh) {
        password += getrandomCharector(Symbol)
        useSelection += Symbol

    }


    return password
}
function getrandomCharector(charectorStrings) {
    var randomNubmer = Math.floor(Math.random() * charectorStrings.length);
    return charectorStrings[randomNubmer]
}
function writePassword() {
    var finalPassword = passwordGenerator();
    var passwordText = document.querySelector("#password")
    passwordText.value = finalPassword

}

generateBtn.addEventListener("click", writePassword)