let theName = "Elzero";
let arr = [];

console.log(Array.from(theName));
console.log(theName.split(""));
console.log(theName.split("").map((e) => e));
console.log([...theName])
for (let i of theName) {
  arr.push(i);
}
console.log(arr);

