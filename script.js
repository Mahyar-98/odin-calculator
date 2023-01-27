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
