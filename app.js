/**
 * What is needed to make calculator work. We need a display, an input value, an operator, a second input value.
 * Calculator object, will hold all the data needed for a valid expression.
 */
const calculator = {
  //Holds string that represents user input. This will be the number on calculator display.
  //This will hold user input.
  displayValue: "0",
  //Holds the first digit used for the expression
  firstInput: null,
  //Holds operator to be used in expression.
  operator: null,
  //Determines if second operand has been input.
  waitForSecondInput: false
};

/**
 * Application functions
 */

/**
 * Input user digit on display box. Has digit as parameter.
 */
function inputDigit(digit) {
  const { displayValue, waitForSecondInput } = calculator;

  if (waitForSecondInput === true) {
    calculator.displayValue = digit;
    //Determine is waitForSecondInput is true.
    calculator.waitForSecondInput = false;
  } else {
    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
}

/**
 * Input decimal once on display. Has dot as a paramenter to be passed.
 */
function inputDecimal(dot) {
  if (calculator.waitForSecondInput === true) return;
  //Check if the displayValue does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    //Append the decimal point
    calculator.displayValue += dot;
  }
}

/**
 * Function to handle operators.
 * ParseFloat converts displayValue into a number and passes the result to calculator firstOperant
 * if firstInput is null. If value is assigned to firstInput, waitForSecondInput becomes true.
 * If true, indicates secondInput is ready to begin. Also sets calculator.operator to the value clicked.
 */
function operatorHandler(nextOperator) {
  const { firstInput, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);
  //Prevents double input of an operator
  if (operator && calculator.waitingForsecondInput) {
    calculator.operator = nextOperator;
    return;
  }
  //Check if there is prior user input. Then add user input.
  if (firstInput === null) {
    calculator.firstInput = inputValue;
    //Checks if an operator already exists. If so, performCalculation matches the operator executed.
  } else if (operator) {
    const currentValue = firstInput || 0;
    const result = performCalculation[operator](currentValue, inputValue);

    calculator.displayValue = String(result);
    //The result is stored in the result variable.
    calculator.firstInput = result;
  }
  calculator.waitForSecondInput = true;
  calculator.operator = nextOperator;
}

const performCalculation = {
  "/": (firstInput, secondInput) => firstInput / secondInput,
  "*": (firstInput, secondInput) => firstInput * secondInput,
  "+": (firstInput, secondInput) => firstInput + secondInput,
  "-": (firstInput, secondInput) => firstInput - secondInput,
  "=": (secondInput) => secondInput
};

/**
 * Function to reset calculator
 */
function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstInput = null;
  calculator.waitForSecondInput = false;
  calculator.operator = null;
}
/**
 * Update display function will change calculator display based on user input
 * query selector used to grab calculator screen class from DOM.
 * Add value to calculator screen.
 */
function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

updateDisplay();

/**
 * Button press event handler.container.
 * ClassList property returns the class name.
 * Target property returns the element triggered by the event, element that was clicked.
 * Contains method returns a boolean true or false for the target.
 * Value references the value in the button.
 */
const buttons = document.querySelector(".calculator-buttons");

//Add onClick event listener and transfer button values
buttons.addEventListener("click", event => {
  const { target } = event; // ES6 syntax equal to const target = event.target;
  //If element clicked is not a button, end function. Console.log to test functionality of code.

  //Checks that target click is a button.
  if (!target.matches("button")) {
    return;
  }
  //Checks that target contains an operator
  if (target.classList.contains("operator")) {
    operatorHandler(target.value);
    updateDisplay();
    return;
  }
  //Checks that target contains a decimal
  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  //Check that target is the clear button.
  if (target.classList.contains("clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }
  //Call the inputDigit function to log user input. Call update display to show user input.
  inputDigit(target.value);
  updateDisplay();
});
