let display = '';
let operandA = 0;
let operationCount = 0;
let currentOperation = '';
const displayBox = document.querySelector('#display');
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
}
const operationSign = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/',
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
        operandA = 0;
        updateDisplay();
    }
});

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.getAttribute('id') === 'equals-btn') {
        if (currentOperation !== '') {
            display = operate(operandA, display);
            updateDisplay();
            display = '';
        }
    }
});


function operate(a, b) {
    const calValue = currentOperation(Number(a), Number(b));
    currentOperation = '';
    operandA = calValue;
    return calValue;
}

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.classList.contains('operator')) {
        if (operationCount < 1) {
            operandAssignment(button);
        } else {
            goToNextOperation(button);
        }
    }
});

function operandAssignment(target) {
    operandA = display;
    currentOperation = operations[target.value];
    operationCount++;
    display = '';
    updateDisplay();
}

function goToNextOperation(target) {
    if (currentOperation === '') {
        currentOperation = operations[target.value];
    } else {
        display = operate(operandA, display);
        currentOperation = operations[target.value];
    }
    updateDisplay();
    display = '';
}
