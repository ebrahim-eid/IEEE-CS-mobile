const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let n = parseInt(input);
  let result = 0;
  if (n >= 1) {
    // for (let i = 1; i <= n; i++) {
    //   result = result + i;
    // }
    result = (n * (n + 1)) / 2
    console.log(result);
  }
  rl.close();
});
