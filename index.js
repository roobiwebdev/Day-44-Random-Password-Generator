const passwordBox = document.querySelector("input");
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "~!@#$%^&*()_+=-";

const length = 12;
const allChars = UpperCase + LowerCase + Numbers + Symbols;

document.querySelector("button").addEventListener("click", () => {
  let password = "";

  password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += Numbers[Math.floor(Math.random() * Numbers.length)];
  password += Symbols[Math.floor(Math.random() * Symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
});

document.querySelector("#icon").addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
});
