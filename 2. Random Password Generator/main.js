// variables for html dom elements
const box = document.getElementById('result');
const noChar = document.getElementById('noChar');
const upperCase = document.getElementById('UpperCase')
const lowerCase = document.getElementById('LowerCase')
const number = document.getElementById('Number')
const symbol = document.getElementById('Symbol')
const btn = document.getElementsByTagName('button');
const svg = document.getElementsByTagName('svg');
let flag = 0;

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
    if(flag === 1)
    svg[0].innerHTML = `
    <path stroke-linecap="round" stroke-linejoin="round"
    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    `
})

svg[0].addEventListener('click',()=>{
    svg[0].innerHTML=`
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
    `
    flag = 1;
    copyToClipBoard();
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

function copyToClipBoard() {
    // Get the text field
    var copyText = document.getElementById("result");
  
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}
