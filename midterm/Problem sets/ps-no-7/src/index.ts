// Problem Set No. 7

function calculate(operators: string, num1: number, num2: number): number {
  let pow = num1
  switch (operators) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    case '^':
      for (let i = 1; i < num2; i++) {
        pow = pow * num1
      }
      return pow
    default:
      return 0
  }
}
console.log(calculate('+', 2, 3))
console.log(calculate('-', 2, 3))
console.log(calculate('*', 2, 3))
console.log(calculate('/', 2, 3))
console.log(calculate('^', 2, 3))