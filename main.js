// variables for html dom elements
const box = document.getElementById('result');
const noChar = document.getElementById('noChar');
const upperCase = document.getElementById('UpperCase')
const lowerCase = document.getElementById('LowerCase')
const number = document.getElementById('Number')
const symbol = document.getElementById('Symbol')
const btn = document.getElementsByTagName('button');

// Variables to store the list of set used
const UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LC = "abcdefghijklmnopqrstuvwxyz";
const no = "1234567890";
const sym = "~!@#$%^&*()_+=[]\|{};:/?.,<>";

function generateUp() {
    return UC[Math.floor(Math.random() * UC.length)];
}
function generateLow() {
    return LC[Math.floor(Math.random() * LC.length)];
}
function generateNo() {
    return no[Math.floor(Math.random() * no.length)];
}
function generateSym() {
    return sym[Math.floor(Math.random() * sym.length)];
}

btn[0].addEventListener("click", () => {
    calculate();
})

function calculate() {
    let password = "";
    let r=[];
    if (upperCase.checked)
        r.push(0);
    if (lowerCase.checked)
        r.push(1);
    if (number.checked)
        r.push(2);
    if (symbol.checked)
        r.push(3);

    for (let i = 0; i < noChar.value; i++) {
        let randomNumber = Math.floor(Math.random() * r.length);
        if (r[randomNumber] == 0)
            password += generateUp();
        if (r[randomNumber] == 1)
            password += generateLow();
        if (r[randomNumber] == 2)
            password += generateNo();
        if (r[randomNumber] == 3)
            password += generateSym();
        }
        box.value = password;
}