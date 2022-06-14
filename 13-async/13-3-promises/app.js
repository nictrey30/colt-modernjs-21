// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// willGetYouADog
//   .then(() => {
//     console.log('Yey, we got you a dog!');
//   })
//   .catch(() => {
//     console.log('Nah bro, maybe next time!');
//   });

// we frequently return a Promise from a function
const makeDogPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });

makeDogPromise()
  .then(() => {
    console.log('Yey, we got you a dog!');
  })
  .catch(() => {
    console.log('Nah bro, maybe next time!');
  });
