// the original way of sending requests via JS
// does not support promises, so... lots of callbacks!

// MDN doc
// function reqListener() {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load', reqListener);
// oReq.open('GET', 'http://www.example.org/example.txt');
// oReq.send();

// https://swapi.dev/api/planets

const firstReq = new XMLHttpRequest();
// we use a function expression and not arrow function, because we want that the value of this to refer to the firstReq
firstReq.addEventListener('load', function () {
  console.log('1st Request worked');
  const data = JSON.parse(this.responseText);
  // for (let planet of data.results) {
  //   console.log(planet.name);
  // }
  const filmUrl = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener('load', function () {
    console.log('2nd Request worked');
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener('error', function (e) {
    console.log(`Error, ${e}`);
  });
  filmReq.open('GET', filmUrl);
  filmReq.send();
  console.log('2nd Request sent!');
});
firstReq.addEventListener('error', () => {
  console.log('error!');
});
firstReq.open('GET', 'https://swapi.dev/api/planets');
firstReq.send();

// console.log it appears first
console.log('Request sent!');
