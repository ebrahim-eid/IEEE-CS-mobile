// Write a JavaScript function that takes a callback and invokes it after a delay of 2 seconds

function invokeResult(callback) {
  setTimeout(callback, 2000);
}

invokeResult(() => {
  console.log("Zamalek is the best team in Egypt");
});