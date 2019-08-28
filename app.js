/**
 * What is needed to make calculator work. We need a display, an input value, an operator, a second input value.
 * Calculator object, will hold all the data needed for a valid expression.
 */
const calculator = {
  //Holds string that represents user input. This will be the number on calculator display.
  displayValue: "0",
  //Holds the first digit used for the expression
  firstOperand: null,
  //Holds operator to be used in expression.
  operator: null,
  //Determines if second operand has been input.
  waitForSecondOperand: false
};

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
  if (target.classList.contains("operator")) {
    console.log("operator", target.value);
    return;
  }
  if (target.classList.contains(".decimal")) {
    console.log("decimal", target.value);
    return;
  }
  if (target.classList.contains("clear")) {
    console.log("clear", target.value);
  }
  console.log("digit", target.value);
});
