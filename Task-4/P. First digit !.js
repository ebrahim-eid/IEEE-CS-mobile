const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let x = parseInt(input).toString();
  if (x[0] % 2 == 0) {
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
  rl.close();
});
