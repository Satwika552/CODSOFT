let currentInput = '';
let operator = '';
let firstInput = '';
let secondInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    firstInput = currentInput;
    operator = op;
    currentInput = '';
}

function calculate() {
    if (firstInput === '' || currentInput === '') return;
    secondInput = currentInput;

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstInput) + parseFloat(secondInput);
            break;
        case '-':
            result = parseFloat(firstInput) - parseFloat(secondInput);
            break;
        case '*':
            result = parseFloat(firstInput) * parseFloat(secondInput);
            break;
        case '/':
            if (secondInput === '0') {
                alert('Cannot divide by zero!');
                return;
            }
            result = parseFloat(firstInput) / parseFloat(secondInput);
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    firstInput = '';
    secondInput = '';
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    firstInput = '';
    secondInput = '';
    operator = '';
    document.getElementById('display').value = '';
}
