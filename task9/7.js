// -Write a JavaScript function that fetches data from an API and
// cancels the request if it takes longer than a specified time.
function fetchFunction(requiredTime) {
  const specifiedTime = 3000;
  if (requiredTime < specifiedTime) {
    setTimeout(
      () =>
        fetch("https://api.github.com/users/elzerowebschool/repos").then(
          (result) => {
            console.log(result);
          }
        ),
      4000
    );
  } else {
    console.log("It takes more time than specified");
  }
}
fetchFunction(5000);
