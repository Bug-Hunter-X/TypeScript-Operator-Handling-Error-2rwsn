function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(op: string, a: number, b: number): number {
  switch (op) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: throw new Error('Invalid operator');
  }
}

console.log(operate('+', 1, 2)); // 3
console.log(operate('-', 5, 3)); // 2
console.log(operate('*', 4, 2)); // 8
console.log(operate('/', 10, 2)); // 5
console.log(operate('/', 10, 0)); // Throws Error
console.log(operate('%', 10, 3)); // Throws Error