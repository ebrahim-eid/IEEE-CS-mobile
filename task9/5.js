// Write a JavaScript function that fetches data from multiple APIs
// concurrently and returns a combined result using Promises and 'Promise.all()'.


async function fetchFunction(urls) {
  let promisesResult = [];
  urls.forEach((element) => {
    let promises = fetch(element).then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        return "Error throught fetching";
      }
    });
    promisesResult.push(promises);
  });
  return await Promise.all(promisesResult);
}

let urls = [
  "https://api.github.com/users/elzerowebschool/repos",
  "https://api.weatherapi.com/v1/forecast.json?key=f92417adebf74911ae6223847231204&q=cairo",
];
fetchFunction(urls).then(
    (result)=>{console.log(result)}
);
