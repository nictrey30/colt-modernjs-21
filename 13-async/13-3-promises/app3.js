const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // get the body width
      const bodyBoundry = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      // get the current X position of the element
      const currLeft = element.getBoundingClientRect().left;
      // check if the btn right margin is going over the right margin of the body
      if (elRight + amount > bodyBoundry) {
        // reject the Promise if we can't move
        reject({
          bodyBoundry,
          elRight,
          amount
        });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 100, 1000)
  // the arrow function return Promises, so we can chain the .then()
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => {
    console.log('done');
  })
  .catch(({ bodyBoundry, elRight, amount }) => {
    console.log(`Body is ${bodyBoundry}px wide`);
    console.log(
      `Element is at ${Math.floor(elRight)}px, ${amount}px is too large`
    );
  });
