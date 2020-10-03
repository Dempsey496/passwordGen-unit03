var answerEl = document.getElementById("answer");
var genBtnEl = document.getElementById("generate");
var charSet = "";
var passLength = "";
var newPassword = "";

var upperArray = "ABCDEFGHIJKLMNOP";
var lowerArray = "abcdefghijklmnopqrstuvwxyz";
var symbolArray = "!@#$%^&*-?";
var numberArray = "0123456789";
// this part actually works:
function genPassword() {
    password = passWord();
    answerEl.innerHTML = password;
    newPassword = "";  
}
function passWord() {
    passLength = prompt("Choose the length of your new password", "20");
    console.log(passLength);


    if ((passLength < 8) || (passLength > 128) || (isNaN(passLength))) {
        alert("Please choose a password between 8 and 128 characters");
        passWord();
    }

    var includeLower = confirm("Would you like to include lowercase?")
    var includeUpper = confirm("Would you like to include uppercase?")
    var includeSymbol = confirm("Would you like to include symbols?")
    var includeNumber = confirm("Would you like to include numbers?")
    if (includeLower === true) {
        charSet += lowerArray;
        console.log(charSet);
    }
    if (includeUpper === true) {
        charSet += upperArray;
        console.log(charSet);
    }
    if (includeNumber === true) {
        charSet += numberArray;
        console.log(charSet);
    }
    if (includeSymbol === true) {
        charSet += symbolArray;
        console.log(charSet);
    }
    for (i = 0; i < passLength; i++){
        var index = Math.floor(Math.random() * charSet.length);
        newPassword += charSet.charAt(index)
    }
    
    return newPassword;
    

}
genBtnEl.addEventListener("click", genPassword)


