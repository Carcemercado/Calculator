/**
 * What is needed to make calculator work. We need a display, an input value, an operator, a second input value.
 * Calculator object, will hold all the data needed for a valid expression.
 */
const calculator ={
    //Holds string that represents user input. This will be the number on calculator display.
    displayValue: '0',
    //Holds the first digit used for the expression
    firstOperand: null,
    //Holds operator to be used in expression.
    operator: null,
    //Determines if second operand has been input.
    waitForSecondOperand: false,
};

/**
 * Update display function will change calculator display based on user input
 * query selector used to grab calculator screen class from DOM.
 */
function updateDisplay(){
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.display.value;
}

updateDisplay();

/**
 * Button press event handler.container.
 * ClassList property returns the class name. 
 * Target property returns the element triggered by the event.
 * Contains method returns a boolean true or false for the target.
 * Value references the value in the button.
 */
const buttons = document.querySelector('.calculator-buttons');

//Add onClick event listener and transfer button values
buttons.addEventListener('click', (event) =>{
    const {target} = event;
    if (!target.matches ('button')){
        return;
    }
    if (target.classList.contains('operator')){
        console.log('operator', target.value);
        return;
    }
    if (target.classList.contains('.decimal')){
        console,log('decimal', target.value);
        return;
    }
    if (target.classList('clear')){
        console.log('clear', target.value);
    }
})



for (let i = 0; i < cardIcons.length; i++) {
  const card = document.createElement("li"); //Creates new li to be used as a card.
  card.classList.add("card"); //Assigns .card class to li created with card constant.
  card.innerHTML = `<i class="${cardIcons[i]}"></i>`;
  cardsContainer.appendChild(card);
  //Add click event to every card.
  clickCard(card);
}
