let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
/// in one line
console.log(Array.from(new Set(myFriends)).sort((a, b) => a.localeCompare(b)));
