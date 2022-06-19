const checkStatusAndParse = (response) => {
  if (!response.ok) {
    throw new Error(`Status code Error: , ${response.status}`);
  } else {
    // response.json() is a promise, so the function returns a promise and we can chain .then()
    return response.json();
  }
};

const printPlanets = (data) => {
  console.log('Loaded 10 more planets...');
  for (let planet of data.results) {
    console.log(`planet ${planet.name}`);
  }
  return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => fetch(url);

fetchNextPlanets()
  // .then automatically passes the data!
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log('Something went wrong, ', err);
  });
