// -Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

async function fetchFunction(url, noOfRetries = 3, reTime = 1000) {
  let retries = 0;
  while (retries < noOfRetries) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
      retries++;
      if (retries < noOfRetries) {
        console.log(`Retrying number ${retries}`);
        await new Promise((resolve) => setTimeout(resolve, reTime));
      } else {
        throw error;
      }
    }
  }
}

fetchFunction("WRONG URL")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
