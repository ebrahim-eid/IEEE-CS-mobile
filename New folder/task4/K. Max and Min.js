const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", function (expression) {
  expression = expression.split(" ");
  const a = parseInt(expression[0]);
  const b = parseInt(expression[1]);
  const c = parseInt(expression[2]);
  let max = 0;
  let min = 0;
  if (a >= b && a >= c) {
    max = a;
    if (b > c) {
      min = c;
    } else {
      min = b;
    }
  } else if (b >= a && b >= c) {
    max = b;
    if (a > c) {
      min = c;
    } else {
      min = a;
    }
  } else {
    max = c;
    if (a > b) {
      min = b;
    } else {
      min = a;
    }
  }
  console.log(min,max)
  rl.close();
});
