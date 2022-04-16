const charAmountRange = document.getElementById('character-amount-range');
const charAmountNum = document.getElementById('character-amount-number');
const includeUppercaseElement = document.getElementById('include-uppercase');
const includeNumberElement = document.getElementById('include-number');
const includeSymbolElement = document.getElementById('include-symbol');
const form = document.getElementById('password-form');
const passwordDisplay = document.getElementById('password-display');


const uppercaseCharCodes = arrayLowToHigh(65, 90);
const lowercaseCharCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47).concat(
    arrayLowToHigh(58, 64)
).concat(
    arrayLowToHigh(91, 96)
).concat(
    arrayLowToHigh(123, 126)
);

form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = charAmountNum.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumber = includeNumberElement.checked;
    const includeSymbol = includeSymbolElement.checked;

    const password = generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbol);
    passwordDisplay.innerText = password;
});


function generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbol) {
    let charCodes = lowercaseCharCodes;
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes);
    if (includeNumber) charCodes = charCodes.concat(numberCharCodes);
    if (includeSymbol) charCodes = charCodes.concat(symbolCharCodes);

    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('');
}

function arrayLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}


charAmountRange.addEventListener('input', syncCharacterAmount);
charAmountNum.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
    const value = e.target.value;
    charAmountRange.value = value;
    charAmountNum.value = value;
};






