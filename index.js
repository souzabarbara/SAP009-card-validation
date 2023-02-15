import validator from './validator.js';

document.getElementById("validate-button").addEventListener("click", validateCreditCard);

function validateCreditCard() {
    const inputValue = document.getElementById("input-text-credit-card-number").dataset.creditCardNumber

    if (validator.isValid(inputValue)) {
        alert("Cartão válido")
    } else {
        alert("Cartão inválido")
    }
}


document.getElementById("input-text-credit-card-number").addEventListener("keyup", applyMask);

function applyMask(event) {
    const isNumberKey = isFinite(event.key);

    const inputText = document.getElementById("input-text-credit-card-number")

    if (isNumberKey) {
        inputText.value = validator.maskify(inputText.value)
        inputText.dataset.creditCardNumber = inputText.dataset.creditCardNumber + event.key
    } else if (event.key === "Backspace") {
        const newCreditCardNumber = inputText.dataset.creditCardNumber.slice(0, -1)
        inputText.dataset.creditCardNumber = newCreditCardNumber
        inputText.value = validator.maskify(newCreditCardNumber)
    }
}
