let display = '';
let operandA = '';
let operandB = '';
let operationCount = 0;
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


const buttons = document.querySelectorAll('.button');

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
        updateDisplay();
    }
});





buttonContainer.addEventListener('click', event => {
    const button = event.target;
    if (button.getAttribute('id') === 'equals-btn') {
        operate(operandA, operandB, )
        updateDisplay();
    }
});


function operate(valueA, valueB, operation) {
    display = operation(valueA, valueB);
}