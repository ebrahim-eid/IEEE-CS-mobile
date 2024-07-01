let numbers = [];
let strings = [];

/// move numbers to start
function rearrangeArray(array) {
  let newArr = [];
  numbers = array.filter((item) => typeof item === "number");
  let strings = array.filter((item) => typeof item === "string");
  newArr.push(...numbers, ...strings);
  return newArr;
}

/// remove numbers from array
function removeNumbers(array) {
  strings = array.filter((item) => typeof item === "string");
  let result = strings.slice(0, numbers.length).concat(strings);
  return result;
}

let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(removeNumbers(rearrangeArray(chars1)));
console.log(removeNumbers(rearrangeArray(chars2)));
console.log(removeNumbers(rearrangeArray(chars3)));
