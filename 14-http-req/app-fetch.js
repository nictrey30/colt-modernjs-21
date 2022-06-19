// the newer way of making requests via JS
// support promises
// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status.

// The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing

// if I throw an error inside the .then() it will trigger the .catch()

fetch('https://swapi.dev/api/planets')
  .then((response) => {
    // console.log(response);
    // the data is in the .body as a ReadableStream
    // .json() - takes a Response stream and reads it to completion.
    // .json() could take a while in comparison to JSON.parse() to read the stream, so because of that the .json() returns a promise
    if (!response.ok) {
      // when we throw an error inside .then() we have access to it inside the .catch()
      throw new Error(`Status code Error: , ${response.status}`);
    } else {
      // return response.json(), which is a promise
      return response.json();
    }
  })
  .then((data) => {
    console.log('FETCHED ALL PLANETS (first 10)');
    const filmUrl = data.results[0].films[0];
    // return fetch(filmUrl), which is a promise
    return fetch(filmUrl);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status code Error: , ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log('FETCHED FIRST FILM, based off the first planet');
    console.log(data);
  })
  .catch((err) => {
    console.log('Something went wrong, ', err);
  });
