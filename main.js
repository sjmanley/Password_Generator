//symbols,numbers,upperCase,lowerCase//
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var symbols = ['!','$','%','^','&','*','(','?',':',']','[',';']


function passwordRequirements (){
    var passwordLength = parseInt(prompt("How long do you want your password?"));
    console.log(passwordLength);
    if (isNaN(passwordLength) === true) {
        alert("Please ensure you use a valid length");
        return;
    }
    if (passwordLength <8){
        alert("Please ensure you have at least 8 characters");
        return;
    }
    if (passwordLength >128){
        alert("Please ensure your password is less than 128 characters");
        return;
    }
    var containsSymbols = confirm("Click OK button to confirm special characters");
    var containUppercase = confirm("Click OK button to confirm Upper Case letters");
    var containLowercase = confirm("Click OK button to confirm Lower Case letters");
    var containNumbers = confirm("Click OK button to confirm Numbers");

    var password = generatePassword(containsSymbols, containUppercase, containLowercase, containNumbers)
    
    function populateform(enterlength){
        document.pgenerate.output.value=generatepass(enterlength)
        }
    
    // TO DO: do something with password//
}
function generatePassword (passwordLength, containsSymbols, containUpperCase, containLowerCase, containNumbers){
    console.log(arguments);
    return passwordRequirements;
}


function toCharArray(str){
    charArray =[];
    for(var i=0;i<str.length;i++){
         charArray.push(str[i]);
    } return charArray;
}

function copyToClipboard() {
    document.getElementById("password").select();
  
    document.execCommand("Copy");
  
    alert("Password copied to clipboard");
  }





  for(var i=0; i <= generatePassword; i++) {
    password = password + numbers,upperCase,lowerCase,symbols.charAt(Math.floor(Math.random() * Math.floor(password.length - 1)));
    }
    document.getElementById("password").numbers,upperCase,lowerCase,symbols.values = password;