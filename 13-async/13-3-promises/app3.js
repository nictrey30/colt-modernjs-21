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
        reject();
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000).then(() => {
  console.log('Done moving');
});
