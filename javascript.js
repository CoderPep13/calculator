function add(a,b) {
    return a + b
  }
  
  function subtract(a,b) {
    return a - b
  }
  
  function multiply(a,b) {
    return a * b
  }
  
  function divide(a,b) {
    return a / b
  }
  
  function operate(operator, a, b) {
    if(operator === '+') {
      return add(a, b)
    } else if(operator === '-') {
      return subtract(a, b)
    } else if(operator === '*') {
      return multiply(a, b)
    } else if (operator === '/') {
      return b === 0 ? 'You suck at Math!' : divide(a, b);
    }
  }
  
  const numbers = document.querySelectorAll('.number')
  const operators = document.querySelectorAll('.operator')
  const equal = document.querySelector('.equal')
  const clear = document.querySelector('.clear')
  const display = document.querySelector('.display')
  
  let sign = '';
  let currentDisplay = '';
  let previousDisplay = '';
  let result = null;
  let ResetDisplay = false;
  
  function updateDisplay(num) {
    if(ResetDisplay) {
      currentDisplay = '';
      ResetDisplay = false;
    }
    currentDisplay += num;
    display.textContent = currentDisplay;
  }
  
  numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
      updateDisplay(e.target.textContent);
    })
  })
  
  operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
      if (currentDisplay === "") return;
      if (previousDisplay !== "") {
        result = operate(sign, parseFloat(previousDisplay), parseFloat(currentDisplay));
        display.textContent = result;
        previousDisplay = result.toString();
      } else {
        previousDisplay = currentDisplay;
      }
      sign = e.target.textContent;
      currentDisplay = "";
    })
  })
  
  equal.addEventListener('click', () => {
    if (!sign || currentDisplay === "") return;
    display.textContent = operate(sign, parseFloat(previousDisplay), parseFloat(currentDisplay));
    previousDisplay = display.textContent;
    ResetDisplay = true;
  })
  
  clear.addEventListener('click', () => {
    display.textContent = "";
    currentDisplay = "";
    previousDisplay = "";
    sign = "";
    result = null;
  })