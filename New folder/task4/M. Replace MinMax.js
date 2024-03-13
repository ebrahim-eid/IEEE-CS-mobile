const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (n) => {
    rl.question('', (input) => {
        const a = input.split(' ').map(Number);
        minMax(a);
        rl.close();
    });
});


function minMax(a){
    let minIndex = 0;
    let maxIndex = 0;
    for(let i=1; i<a.length; i++){
      if (a[i] < a[minIndex]) {    //
        minIndex = i;
      }
      if (a[i] > a[maxIndex]) {
        maxIndex = i;
      }
      // index min and max كده احنا معانا
    }
    [a[minIndex], a[maxIndex]] = [a[maxIndex], a[minIndex]];
    console.log(a.join(' '));
}