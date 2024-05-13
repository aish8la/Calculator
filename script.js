let display = '';
let operandA = '';
let operandB = '';
let operationCount = 0;
let currentOperation = '';
const displayBox = document.querySelector('#display');
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}

function updateDisplay() {
    displayBox.textContent = display;
}

const buttonContainer = document.querySelector('.button-section');

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.classList.contains('number')) {
        display += '' + button.value;
        updateDisplay();
    }
});

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.getAttribute('id') === 'allClear-btn') {
        display = '';
        operationCount = 0;
        currentOperation = '';
        operandA = '';
        operandB = '';
        updateDisplay();
    }
});

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.getAttribute('id') === 'equals-btn') {
        operandB = display;
        operate(operandA, operandB, currentOperation);
        updateDisplay();
    }
});


function operate(a, b, callback) {
    display = callback(a, b);
}

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.classList.contains('operator') && operationCount < 1) {
        const buttonValue = button.value;
        currentOperation = operations[buttonValue];
        console.log(currentOperation);
        operationCount++;
        operandA = display;
        display = '';
        updateDisplay();
    }
});
