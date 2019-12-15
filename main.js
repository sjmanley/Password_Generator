

// var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//         var string_length = 8;
//         var randomstring = '';
//         for (var i=0; i<string_length; i++) {
//             var rnum = Math.floor(Math.random() * chars.length);
//             randomstring += chars.substring(rnum,rnum+1);
//         }

//         function makeid(length) {
//             var result           = '';
//             var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//             var charactersLength = characters.length;
//             for ( var i = 0; i < length; i++ ) {
//                result += characters.charAt(Math.floor(Math.random() * charactersLength));
//             }
//             return result;
//          }
         
//          console.log(makeid(5));

// var random = Math.random();


// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbol
// };



// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//     const symbols = '!@#$%^&*(+_)(><?{}[]';
//     return symbols[Math.floor(Math.random() * symbols.length)];
// }

// var keylist="adbnginerguobdmpmpm1234567890!@#$^%(&}{"
// var temp=''

// function generatepass(plength) {
//     temp=''
//     for (i-0; i<plength;i++)
//         temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
//         return temp
// }
// function populateform(enterlength){
//     document.pgenerate.output.value = generatepass(enterlenght)
// }

                //Random password generator- by javascriptkit.com
                //Visit JavaScript Kit (http://javascriptkit.com) for script
                //Credit must stay intact for use
                
                // var keylist="abcdefghijklmnopqrstuvwxyz123456789"
                // var temp=''
                
                // function generatepass(plength){
                // temp=''
                // for (i=0;i<plength;i++)
                // temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
                // return temp
                // }
                
                // function populateform(enterlength){
                // document.pgenerate.output.value=generatepass(enterlength)
                // }

                // function myFunction() {
                //     document.getElementById("demo").innerHTML = Math.random();
                //   }

                var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

                function generate () {
                    var password = "";
                    for (i = 0; i < 10; i++) {
                        var randomLetter = arr[Math.floor(arr.length * Math.random())];
                        password += randomLetter;
                    }
                    document.getElementById("pw").textContent = password;
                }
                
                document.querySelector('generate1').addEventListener('click', function (event) {
                    event.preventDefault();
                    generate();
                });