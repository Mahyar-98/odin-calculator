function add(a, b) {
  const result = a + b;
  return result;
}

function subtract(a, b) {
  const result = a - b;
  return result;
}

function multiply(a, b, ...arguments) {
  let result = a * b;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}

function divide(a, b) {
  const result = a / b;
  return result;
}

function operate(operator, a, b) {
  const result = operator(a, b);
  return result;
}


const btns = document.querySelectorAll("button");
const screen = document.querySelector(".screen > span");
const NUMS = "0123456789"
let firstNum = null;
let secondNum = null;
let operation = "";
let isNewNumber = true;
let display = null;
btns.forEach(btn => {
  btn.addEventListener("click", output)
});


function output(event) {

  if (event.target.textContent === "CLEAR") {
    screen.textContent = 0;
    isNewNumber = true;
    firstNum = null;
    operation = "";
  }

  if (event.target.textContent === "DELETE") {
    if (+screen.textContent !== 0 && screen.textContent.length > 1) {
      screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    } else if (screen.textContent.length === 1) {
      screen.textContent = 0;
    }
  }

  if (NUMS.includes(event.target.textContent)) {
    if (isNewNumber) {
      isNewNumber = false
      screen.textContent = event.target.textContent;
    } else {
      if (screen.textContent !== "0" && screen.textContent.length < 12) {
        screen.textContent += event.target.textContent;
      } else {
        screen.textContent = event.target.textContent;
      }
    }
  }

  if (event.target.textContent === "."){
    isNewNumber = false;
    if (!screen.textContent.includes(".")) {
      screen.textContent += "."
    }
  } 

  if ("÷×-+=".includes(event.target.textContent)) {
    isNewNumber = true;
    if (firstNum === null) {
      console.log("hi")
      firstNum = +screen.textContent;
      operation = event.target.textContent;
    } else {
      if (operation === "=") {
        secondNum = null;
      } else {
        secondNum = +screen.textContent;
      }
      if (secondNum) {
        if (operation === "+") {
          display = operate(add, firstNum, secondNum);
        } else if (operation === "-") {
          display = operate(subtract, firstNum, secondNum);
        } else if (operation === "×") {
          display = operate(multiply, firstNum, secondNum);
        } else if (operation === "÷") {
          display = operate(divide, firstNum, secondNum);
        }
      }
      if (display > 999999999999) {
        screen.textContent = "+999999999999"
      } else {
        screen.textContent = display.toString().slice(0,12)
      }
      operation = event.target.textContent;
      firstNum = +screen.textContent;
      console.log(firstNum)
    }
  }
}
