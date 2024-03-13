function getResult(a, b, s) {
  if (s === "+") {
    return a + b;
  } else if (s === "-") {
    return a - b;
  } else if (s === "*") {
    return a * b;
  }
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("",function(expression) {
  expression = expression.split(' ');
  const a = parseInt(expression[0]);
  const s = expression[1];
  const b = parseInt(expression[2]);
  const q = expression[3];
  const c = parseInt(expression[4]);
  if (c == getResult(a,b, s)) {
    console.log("Yes");
  } else {
    console.log(getResult(a, b, s));
  }
  
  rl.close();
});