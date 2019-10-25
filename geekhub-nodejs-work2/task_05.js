// Create calculator

function toCalculate(number1, number2, operator) {

    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        case '%':
            return number2 / number1 * 100;
        default:
            console.error("Unknown operation");
    }
}

console.log(toCalculate(2, 3.14, "*"));
