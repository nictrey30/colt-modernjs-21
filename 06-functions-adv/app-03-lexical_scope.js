function outer() {
  let movie = 'Amadeus';
  function inner() {
    let movie = 'The Shining';
    console.log(movie.toUpperCase());
  }
  inner(); // 'THE SHINING'
}
