const password_element = document.getElementById("password");
const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*@#$%^&*";
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
var length = document.getElementById("length");


generate.addEventListener('click', () => {
    let password = "";
    var str = string;
    for (var i = 0; i < length.value; i++) {
        let pwd = str[Math.floor(Math.random() * str.length)];
        password += pwd;
    }
    password_element.innerText = password;
    str = string;
});


clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(password_element.innerText);
    alert("Password copied to clipboard");
});