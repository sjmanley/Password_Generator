//symbols,numbers,upperCase,lowerCase//
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symbols = ['!', '$', '%', '^', '&', '*', '(', '?', ':', ']', '[', ';']


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
    var containsSymbols = confirm("Click OK button to confirm special characters");
    var containUppercase = confirm("Click OK button to confirm Upper Case letters");
    var containLowercase = confirm("Click OK button to confirm Lower Case letters");
    var containNumbers = confirm("Click OK button to confirm Numbers");

    if (containsSymbols === false && containUppercase === false && containLowercase === false && containNumbers === false )    
    { alert ("Please go back and pick one number or symbol");
        return;
    }


    var passwordTypes = {
        passwordLength: passwordLength, 
        containsSymbols: containsSymbols,
        containLowerCase: containLowercase,
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
    var passwordResult = [];
    var potentialCharacters = [];
    var guaranteedCharacters = [];

if (options.containsSymbols){
    potentialCharacters = potentialCharacters.concat(symbols);
    guaranteedCharacters.push(randomize(symbols));
}
if (options.containUppercase){
    potentialCharacters = potentialCharacters.concat(upperCase);
    guaranteedCharacters.push(randomize(upperCase));
}
if (options.containLowercase){
    potentialCharacters = potentialCharacters.concat(lowerCase);
    guaranteedCharacters.push(randomize(lowerCase));
}
if (options.containNumbers){
    potentialCharacters = potentialCharacters.concat(numbers);
    guaranteedCharacters.push(randomize(numbers));
}
    for (var i = 0; i < passwordLength.length; i++){
        var potentialCharacter = randomize(potentialCharacters);
        passwordResult.push(potentialCharacter);
    }
    for (var i = 0; i < guaranteedCharacters.length; i++){
        passwordResult[i] = guaranteedCharacters[i];
    } 
   
    return passwordResult.join("");
}  

var myPassword = passwordGenerator();
console.log(myPassword)
var copy = document.getElementById('generate1');
var clipboard = document.getElementById('generate2');

function printPassword (){
    var pw = passwordGenerator();
    var pwPrint = document.getElementById('password');
    pwPrint.value = pw;
}

console.log (printPassword);

// function copyToClipboard() {
//     document.getElementById("password").select();

//     document.execCommand("Copy");

//     // let password = []
//     // while (password.length < length) {
//     //     const rnd = Math.floor(Math.random() * avail.length);
//     //     password.push(avail[rnd]);
//     // }
// console.log (copyToClipboard);

//     alert("Password copied to clipboard");
// }

