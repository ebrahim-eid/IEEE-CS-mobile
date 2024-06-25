//Write a JavaScript program that converts a callback-based function to a Promise-based function.

function callbackBasedFunction(callback) {
  setTimeout(() => {
    callback(true, "Result");
  }, 2000);
}

const myPromise = new Promise((resolve, reject) => {
  callbackBasedFunction((condition, result) => {
    if (condition) {
      resolve(result);
    } else {
      reject("rejected");
    }
  });
});

myPromise.then(
  (resolveResult) => console.log(`Good ${resolveResult}`),
  (rejectResult) => console.log(`Bad ${rejectResult}`)
);
