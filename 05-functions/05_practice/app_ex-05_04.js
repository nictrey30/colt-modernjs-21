// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object
// function pick - returns a random index from the array
function pick(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex;
}
function getCard() {
  const cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  const cardSuite = ['clubs', 'spades', 'hearts', 'diamonds'];
  return {
    value: cardValue[pick(cardValue)],
    suite: cardSuite[pick(cardSuite)]
  };
}
