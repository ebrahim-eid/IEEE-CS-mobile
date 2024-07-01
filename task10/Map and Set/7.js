let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

/// three methods

console.log([...numsOne,...numsTwo])
console.log(numsOne.concat(numsTwo))
let newArr=[]
newArr.push(...numsOne, ...numsTwo)
console.log(newArr)
