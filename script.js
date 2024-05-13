let display = '';
let operandA = '';
let operandB = '';
let operationCount = 0;
const displayBox = document.querySelector('#display');

const add = (a, b) => {
    return a + b;
}

const subtraction = (a, b) => {
    return a - b;
}

const multiplication = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const buttons = document.querySelectorAll('.button');

const buttonContainer = document.querySelector('.button-section');

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.classList.contains('number')) {
        display += '' + button.value;
        displayBox.textContent = display;
        console.log(display);
    }
});