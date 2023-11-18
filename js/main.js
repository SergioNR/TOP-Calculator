// Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
// add
// subtract
// multiply
// divide

const addNumber = (num1, num2) => {
    return num1 + num2
}

const subtractNumber = (num1, num2) => {
    return num1 - num2
}

const multuplytNumber = (num1, num2) => {
    return num1 * num2
}

const divideNumber = (num1, num2) => {
    return num1 / num2
}


// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.

let num1 = 0;
let num2 = 0;
let operator;