// Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
// add
// subtract
// multiply
// divide

// Populate display
const resultDisplayContainer = document.querySelector(`.resultDisplayContainer`);

const resultDisplay = document.createElement(`p`);

resultDisplay.classList.add(`resultDisplay`);


const populateDisplay = (operationResult) => {
    resultDisplayContainer.append(resultDisplay)
    resultDisplay.textContent = `${operationResult}`
};


// Mathematical functions 
const addNumber = (num1, num2) => {
    return num1 + num2
}

const subtractNumber = (num1, num2) => {
    return num1 - num2
}

const multiplyNumber = (num1, num2) => {
    return num1 * num2
}

const divideNumber = (num1, num2) => {
    return num1 / num2
}


// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.



// Operation functions
let num1 = 0; // TODO Allow user to chose num1 and num2 and operator - operator should be fairly easy, but ill have to think about the numbers
let num2 = 0;
let operator;


const equalButton = document.querySelector(`.equalButton`)

equalButton.addEventListener(`click`, () => operate(num1,num2,operator))

const operate = (num1, num2, operator) => {
    let result = 0;
    if (typeof num1 !== `number` || typeof num2 !== `number`) {
        console.log(`need numbers please bruv`)
    }

    switch (operator) {
        case `+`:
            operationResult = addNumber(num1,num2)
            populateDisplay(operationResult)
            break;
        case `-`:
            operationResult = subtractNumber(num1,num2)
            populateDisplay(operationResult)
            break;
        case `*`:
            operationResult = multiplyNumber(num1,num2)
            populateDisplay(operationResult)
            break;
        case `/`:
            operationResult = divideNumber(num1,num2)
            populateDisplay(operationResult)
            break;
    
        default:
            break;
    }
}



// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// Clear display 
const clearDisplay = () => {
    populateDisplay(`0`)
}

const clearDisplayButton = document.querySelector(`.clearDisplayButton`)

clearDisplayButton.addEventListener(`click`, () => clearDisplay())

// Set default value for display on calculator load
populateDisplay(`0`)