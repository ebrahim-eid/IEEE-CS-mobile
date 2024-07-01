let theNumber = 100020003000;

let result = [...new Set(theNumber.toString().split('0'))].join('');

console.log(Number(result));
