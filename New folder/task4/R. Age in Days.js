const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let n = parseInt(input);
  let years = 0;
  let months = 0;
  while (n >= 365) {
    n -= 365;
    years += 1;
  }
  while (n >= 30) {
    n -= 30;
    months += 1;
  }

  let days = n;

  console.log(`${years} years`);
  console.log(`${months} months`);
  console.log(`${days} days`);

  rl.close();
});
