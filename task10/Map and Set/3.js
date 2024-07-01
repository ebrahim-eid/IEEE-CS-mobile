let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myInfoMap = new Map(Object.entries(myInfo));

console.log(myInfoMap);
console.log(myInfoMap.size);

function checkRole(map) {
  let condition = false;
  for (let element of Array.from(map.keys())) {
    if (element === "role") {
      condition = true;
    }
  }
  return condition;
}

console.log(checkRole(myInfoMap));
