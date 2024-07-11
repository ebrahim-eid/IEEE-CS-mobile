console.log('Hello World! 🌎')

// crete a readonly tuple
let post: readonly [number, string, boolean] = [100, "Title", true];

post = [100, 200, "Title"]; // Error
post = ["Title", 100, true]; // Error 
post = [100, "Title", true]; // Good

post.push("ElZero"); // Error

// Create Destructuring Here
const [id, title, state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true