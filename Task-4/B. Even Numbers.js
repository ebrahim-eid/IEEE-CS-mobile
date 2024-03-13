const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  let n = parseInt(input);
let isEven=false;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
      isEven=true
    }
  }

  if(!isEven){
    console.log(-1)
  }
  rl.close();
});
