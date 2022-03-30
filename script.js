let prevNumber = ' ';
let calculationOperator = ' ';
let currentNumber = '0';

// button angka
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

// button operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
   });
});

// button desimal
const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

// layar kalkulator
const calculatorScreen = document.querySelector('.output-value');

const updateScreen = (number) => {
    calculatorScreen.value = number ;
}

// button menghitung hasil
const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

// button persen
const percent = document.querySelector('.percentage');

percent.addEventListener("click", () => {
    result = parseFloat(currentNumber) * 1 / 100;
    currentNumber = result
    updateScreen(currentNumber);
});

// button All Clear
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});