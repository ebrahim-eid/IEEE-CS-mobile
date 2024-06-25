//Write a JavaScript function that takes an array of URLs and 
//downloads the contents of each URL in parallel using Promises.

function arryOfUrls(urls) {
  let promisesResult = [];
  urls.forEach((e) => {
    let promise = new Promise((resolve, reject) => {
      let myRequest = new XMLHttpRequest();
      myRequest.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(Error("Error....."));
        }
      };
      myRequest.open("GET", e);
      myRequest.send();
    });
    promisesResult.push(promise);
  });
  return Promise.all(promisesResult);
}

let urls = [
  "https://api.github.com/users/elzerowebschool/repos",
  "https://api.weatherapi.com/v1/forecast.json?key=f92417adebf74911ae6223847231204&q=cairo",
];

arryOfUrls(urls).then((result) =>
  result.forEach((result) => console.log(result))
);
