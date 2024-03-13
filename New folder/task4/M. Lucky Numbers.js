const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  let numbers = input.split(" ");

  let num1 = parseInt(numbers[0]);
  let num2 = parseInt(numbers[1]);
  getLuckyNumbers(num1,num2);

  rl.close();
});

function getLuckyNumbers(num1,num2){
let listNumbers=[];
let listOfLukey = [4,     7,    44,    47,    74,    77,   444,
    447,   474,   477,   744,   747,   774,   777,
   4444,  4447,  4474,  4477,  4744,  4747,  4774,
   4777,  7444,  7447,  7474,  7477,  7744,  7747,
   7774,  7777, 44444, 44447, 44474, 44477, 44744,
  44747, 44774, 44777, 47444, 47447, 47474, 47477,
  47744, 47747, 47774, 47777, 74444, 74447, 74474,
  74477, 74744, 74747, 74774, 74777, 77444, 77447,
  77474, 77477, 77744, 77747, 77774, 77777
  ];
  for(let i = num1 ; i<=num2;i++){
    for(let j =0;j<listOfLukey.length;j++){
        if(i==listOfLukey[j]){
            listNumbers.push(listOfLukey[j]);
        }
    }
  }
  if(listNumbers.length !=0){
    console.log(listNumbers.join(' '));
  }else{
    console.log(-1);
  }
  
}
