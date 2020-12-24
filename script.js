const answerEl = document.getElementById("answer");
const genBtnEl = document.getElementById("generate");
const copyBtnEl = document.getElementById("copy");
let charSet = "";
let passLength = "";
let newPassword = "";

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbolCase = "!@#$%&?";
const numberCase = "0123456789";
// Displays password in answer area, then clears out newPassword
function genPassword() {
  password = passWord();
  answerEl.innerHTML = password;
  newPassword = "";
}
function passWord() {
  passLength = prompt("Choose the length of your new password", "20");
  console.log(passLength);

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please choose a password between 8 and 128 characters");
    passWord();
  }

  let includeLower = confirm("Would you like to include lowercase?");
  let includeUpper = confirm("Would you like to include uppercase?");
  let includeSymbol = confirm("Would you like to include symbols?");
  let includeNumber = confirm("Would you like to include numbers?");
  if (includeLower === true) {
    charSet += lowerCase;
  }
  if (includeUpper === true) {
    charSet += upperCase;
  }
  if (includeNumber === true) {
    charSet += numberCase;
  }
  if (includeSymbol === true) {
    charSet += symbolCase;
  }
  for (i = 0; i < passLength; i++) {
    var index = Math.floor(Math.random() * charSet.length);
    newPassword += charSet.charAt(index);
  }
  return newPassword;
}

function copyPassword() {
  let copyText = document.getElementById("answer");
  copyText.select();

  // This is for mobile devices...
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  // Alert copied text
  alert("Copied the password: " + copyText.value);
}

genBtnEl.addEventListener("click", genPassword);
copyBtnEl.addEventListener("click", copyPassword);
