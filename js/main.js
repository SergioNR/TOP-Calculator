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
    console.log(`result is ${operationResult}`) //* uncomment for debug - will print operation result
    resultDisplayContainer.append(resultDisplay)
    resultDisplay.textContent = `${operationResult}`
};


// Mathematical logic
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
let num1 = null;
let num2 = null;
let operator = null;

// Operation logic
const equalButton = document.querySelector(`.equalButton`)

equalButton.addEventListener(`click`, () => operate(num1,num2,operator))

const operate = (num1, num2, operator) => {
    let result = 0;
    if (operator === null) {
        alert(`Please input an operator`)
        console.log(`please input an operator`) //* Checks if there is an operator selected
    }

    if (typeof num1 !== `number` || typeof num2 !== `number`) {
        alert(`please select two numbers`)
        console.log(`need numbers please bruv`)
    } //* Checks if the operation values have been selected

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

// Reset operation values

const resetOperationValues = () => {
    num1 = null;
    num2 = null;
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// Clear display 
const clearDisplay = () => {
    populateDisplay(`0`) //* Hardcoded as 0 so calculator will always show 0 on "clear button" press or initial load
}

const clearDisplayButton = document.querySelector(`.clearDisplayButton`)

clearDisplayButton.addEventListener(`click`, () => clearDisplay())


clearDisplay() //* Set default value for display on page load

// Obtain operation values
const getOperationValues = (e) => {
    const numberInputButton = document.querySelectorAll(`.numberInputButton`);
    numberInputButton.forEach((numberInputButton) => {
        numberInputButton.addEventListener(`click`, (e) => {
            if (num1 === null) {
                num1 = parseInt(e.target.innerHTML);
                // console.log(` this value is for num1 => ${typeof num1}, num1`); // * uncomment for debug - will print variable value and type
            }
            else if (num1 !== null && num2 === null) {
                num2 = parseInt(e.target.innerHTML);
                // console.log(` this value is for num2 => ${typeof num2}, num2`); //* uncomment for debug - will print variable value and type
            }
            else {
                resetOperationValues();
            }
        })
    })
};

getOperationValues() //* Need to run the function once so the eventListener is applied to all the numberInputButtons


// Obtain operation operator
const getOperationOperator = (e) => {
    const operatorInputButton = document.querySelectorAll(`.operatorInputButton`)

    operatorInputButton.forEach((operatorInputButton) => {
        operatorInputButton.addEventListener(`click`, (e) => {
            operator = e.target.innerHTML
            // console.log(` this value is for operator => ${typeof operator}, operator`); //* uncomment for debug - will print variable value and type
        })
    })
}

getOperationOperator() //* Need to run the function once so the eventListener is applied to all the numberInputButtons

// i think that i need to create a for each loop so every number input has a event listener which will return the innerHTML value and set it to num1 and num2 -- 
