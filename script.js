// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```
var genBtnEl = document.getElementById("generate");
var charSet = "";
var passLength = "";

var upperArray = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";
var lowerArray = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
var symbolArray = "!,@,#,$,%,^,&,*,-,?,";
var numberArray = "0,1,2,3,4,5,6,7,8,9,";
// this part actually works:
passWord();
function passWord() {
    passLength = prompt("Choose the length of your new password", "20");
    console.log(passLength);

    
    if ((passLength < 8) || (passLength > 128) || (isNaN(passLength))) {
        alert("Please choose a password between 8 and 128 characters");
        passWord();
    }
}
// passConfirm();
// function passConfirm(){
// var includeUpper = confrim("Would you like uppercase letters?");
// }

// for (i = 1; i <= criteria.passwordLength; i++) {
//     var index = Math.floor(Math.random() * options.length);
//     newPassword = newPassword + options.charAt(index)
//   }
//   return newPassword;