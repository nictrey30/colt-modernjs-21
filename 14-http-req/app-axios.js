const printPlanets = ({ data }) => {
  console.log('Loaded 10 more planets...');
  for (let planet of data.results) {
    console.log(`planet ${planet.name}`);
  }
  return axios.get(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') =>
  axios.get(url);

fetchNextPlanets()
  .then(printPlanets)
  .then(printPlanets)
  .catch(({ message }) => {
    console.log(message);
  });
