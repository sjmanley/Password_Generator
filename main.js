//symbols,numbers,upperCase,lowerCase//
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symbols = ['!', '$', '%', '^', '&', '*', '(', '?', ':', ']', '[', ';']

// var passwordLength = ("passwordLength");

function passwordRequirements() {
    var passwordLength = parseInt(prompt("How long do you want your password?"));
    console.log(passwordLength);
    console.log("this is from line 10")
    if (isNaN(passwordLength) === true) {
        alert("Please ensure you use a valid length");
        return;
    }
    if (passwordLength < 8) {
        alert("Please ensure you have at least 8 characters");
        return;
    }
    if (passwordLength > 128) {
        alert("Please ensure your password is less than 128 characters");
        return;
    }
    var containSymbols = confirm("Click OK button to confirm special characters");
    var containUppercase = confirm("Click OK button to confirm Upper Case letters");
    var containLowercase = confirm("Click OK button to confirm Lower Case letters");
    var containNumbers = confirm("Click OK button to confirm Numbers");

    if (containSymbols === false && containUppercase === false && containLowercase === false && containNumbers === false) {
        alert("Please go back and pick one number or symbol");
        return;
    }
    console.log(containSymbols, containUppercase, containLowercase, containNumbers)

    //storages characters
    var passwordTypes = {
        passwordLength: passwordLength,
        containSymbols: containSymbols,
        containLowercase: containLowercase,
        containNumbers: containNumbers,
        containUppercase: containUppercase
    };


    return passwordTypes;

}
function randomize(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var element = arr[index];
    return element;
}


function passwordGenerator() {
    var options = passwordRequirements();
    console.log(options)

    var passwordResult = [];
    var potentialCharacters = [];
    var guaranteedCharacters = [];

    if (options.containSymbols) {
        potentialCharacters = potentialCharacters.concat(symbols);
        guaranteedCharacters.push(randomize(symbols));
        console.log("guaranteedCharacters", guaranteedCharacters);
    }
    if (options.containUppercase) {
        potentialCharacters = potentialCharacters.concat(uppercase);
        guaranteedCharacters.push(randomize(uppercase));
        console.log("guaranteedCharacters", guaranteedCharacters);
    }
    if (options.containLowercase) {
        potentialCharacters = potentialCharacters.concat(lowercase);
        guaranteedCharacters.push(randomize(lowercase));
        console.log("guaranteedCharacters", guaranteedCharacters);
    }
    if (options.containNumbers) {
        potentialCharacters = potentialCharacters.concat(numbers);
        guaranteedCharacters.push(randomize(numbers));
        console.log("guaranteedCharacters", guaranteedCharacters);
    }
    for (var i = 0; i < options.passwordLength; i++) {
        var potentialCharacter = randomize(potentialCharacters);
        passwordResult.push(potentialCharacter);
    }
    for (var i = 0; i < guaranteedCharacters.length; i++) {
        passwordResult[i] = guaranteedCharacters[i];
    }

    return passwordResult.join("");
}

var copyBtn = document.querySelector("#copy");
var generateBtn = document.querySelector("#generate1");


function printPassword() {
    var pw = passwordGenerator();
    var pwPrint = document.getElementById('password');
    pwPrint.value = pw;
}

console.log(printPassword);


function copyToClipboard() {
    var passwordText = document.querySelector("#password");

    passwordText.select();
    document.execCommand("copy");

    alert(
        "Your password " + passwordText.value + " was copied to your clipboard."
    );
}

// Add event listener to generate button
generateBtn.addEventListener("click", printPassword);

// Add event listener to copy button
copyBtn.addEventListener("click", copyToClipboard);