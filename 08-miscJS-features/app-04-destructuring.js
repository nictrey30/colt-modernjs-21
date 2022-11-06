// destructuring arrays
const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

// destructuring objects
const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya'
};

// const {
//   first,
//   last,
//   time -> undefined, because it is not in the object keys
// } = runner;

// give new names to the country and title variables, make a variable called nation based of the value found in country
const { country: nation, title: honorific } = runner;

// const { first, last, ...other } = runner;

// nested destructuring
const results = [
  {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
];

// extracting country from the 2nd object
// const [, { country: country_2 }] = results;
const [, silverMedal] = results;
const { country: silverCountry } = silverMedal; // silverCountry -> 'Ethiopia'
