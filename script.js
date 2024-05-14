let display = '';
let history = '';
let operandA = 0;
let operationCount = 0;
let currentOperation = '';
const historyDisplay = document.querySelector('#history');
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

function updateHistory() {
    historyDisplay.textContent = history;
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
        history = '';
        operationCount = 0;
        currentOperation = '';
        operandA = 0;
        updateDisplay();
        updateHistory();
    }
});

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.getAttribute('id') === 'equals-btn') {
        display = operate(operandA, display);
        updateHistory();
        updateDisplay();
    }
});


function operate(a, b) {
    history += ' ' + display;
    return currentOperation(Number(a), Number(b));
}

buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.classList.contains('operator')) {
        if (operationCount < 1) {
            operandAssignment(button);
        } else {

        }
    }
});

function operandAssignment(target) {
    operandA = display;
    currentOperation = operations[target.value];
    history += '' + display + ' ' + operationSign[target.value];
    operationCount++;
    display = '';
    updateDisplay();
    updateHistory();
}
