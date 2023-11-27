// Global variables
let tempNum = 0;
let num1 = 0;
let num2 = 0
let operationResult = 0;
let operator = ``;
let aux = 0;


// Populate display
const resultDisplayContainer = document.querySelector(`.resultDisplayContainer`);

const resultDisplay = document.createElement(`p`);

resultDisplay.classList.add(`resultDisplay`);


function populateDisplay (displayContent)  {
    // console.log(`displayContent is ${displayContent}`) //* uncomment for debug - will print operation result
    resultDisplayContainer.append(resultDisplay)
    resultDisplay.textContent = `${displayContent}`
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


// Operation function
const equalButton = document.querySelector(`.equalButton`)

equalButton.addEventListener(`click`, () => operate(num1,num2,operator))

const operate = (num1, num2, operator) => {
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
    num1 = 0;
    num2 = 0;
    operator = 0;
}


// Clear display 
const clearDisplay = () => {
    populateDisplay(`0`) //* Hardcoded as 0 so calculator will always show 0 on "clear button" press or initial load
}

const clearDisplayButton = document.querySelector(`.clearDisplayButton`)

clearDisplayButton.addEventListener(`click`, () => clearDisplay())

clearDisplay() //* Set default value for display on page load



/* i need to reproduce that
selecting num , when i press on operator, save it to num1, 
when i click a number, it is added to the already existing number
currentNum = 1; , click on 2 , currentNum = 12
num1 = currentNum + extraNum
How do i move to number2?
a solution could be using the operator as trigger but what happens if the operator is pressed before? */

// Obtain operation values
const getOperationValues = (e) => {
    const numberInputButton = document.querySelectorAll(`.numberInputButton`);
    numberInputButton.forEach((numberInputButton) => {
        numberInputButton.addEventListener(`click`, (e) => {
                let pressedNum = e.target.innerHTML;
                tempNum = `${tempNum + pressedNum}`
                populateDisplay(tempNum)
                console.log(` this value is for tempNum => ${typeof tempNum} and the value is ${tempNum}`); // * uncomment for debug - will print variable value and type          
        })
    })
};

getOperationValues() //* Need to run the function once so the eventListener is applied to all the numberInputButtons

const setNumber = () => {
    if (num1 === 0) {
    num1 = parseInt(tempNum);
    tempNum = 0;
    console.log(` this value is for tempNum => ${typeof num1} and the value is ${num1}`) //* uncomment for debug - will print variable value 
    }
    else {
        num2 = parseInt(tempNum);
        console.log(` this value is for tempNum => ${typeof num2} and the value is ${num2}`) //* uncomment for debug - will print variable value 
    }
}

// Obtain operation operator
const getOperationOperator = (e) => {
    const operatorInputButton = document.querySelectorAll(`.operatorInputButton`)
    
    operatorInputButton.forEach((operatorInputButton) => {
        operatorInputButton.addEventListener(`click`, (e) => {
            setNumber()
            operator = e.target.innerHTML
            // console.log(` this value is for operator => ${typeof operator}, and the value is ${operator},`); //* uncomment for debug - will print variable value and type
        })
    })
}


getOperationOperator() //* Need to run the function once so the eventListener is applied to all the numberInputButtons

// i think that i need to create a for each loop so every number input has a event listener which will return the innerHTML value and set it to num1 and num2 -- 

