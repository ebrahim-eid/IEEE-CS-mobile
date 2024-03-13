const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  const [n, m] = input.split(" ").map(Number);

  rl.question("", (input) => {
    const arr = input.split(" ").map(Number);
    getFrequacy(arr);
    rl.close();
  });
});

function getFrequacy(arr){
    let repeat ={}
    arr.forEach(element => {
        if(repeat[element]){
            repeat[element]++;
        }else{
            repeat[element]=1
        }
    });
    for (let key in repeat) {
        console.log(repeat[key]);
    }
}
