// funtion that detects if 2 images in the dom are overlapping
function isTouching(a, b) {
  // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.getElementById('player');
const coin = document.getElementById('coin');

window.addEventListener('keyup', function (e) {
  let currTop = extractPos(avatar.style.top);
  let currLeft = extractPos(avatar.style.left);
  // console.log(`currTop: ${currTop} - currLeft: ${currLeft}`);
  switch (e.key) {
    case 'ArrowDown' || 'Down':
      avatar.style.top =
        currTop < this.innerHeight - 250
          ? `${currTop + 50}px`
          : `${this.innerHeight - 200}px`;
      break;
    case 'ArrowUp' || 'Up':
      currTop = extractPos(avatar.style.top);
      avatar.style.top = currTop > 50 ? `${currTop - 50}px` : 0;
      break;
    case 'ArrowRight' || 'Right':
      avatar.style.transform = 'scale(1,1)';
      avatar.style.left =
        currLeft < this.innerWidth - 150
          ? `${currLeft + 50}px`
          : `${this.innerWidth - 100}px`;
      break;
    case 'ArrowLeft' || 'Left':
      // console.log(currLeft, this.innerWidth);
      // flip the image to the left
      avatar.style.transform = 'scale(-1,1)';
      currLeft = extractPos(avatar.style.left);
      avatar.style.left = currLeft > 50 ? `${currLeft - 50}px` : 0;
      break;
  }
  if (isTouching(avatar, coin)) moveCoin();
});

// remove the 'px' at the end of the string
// avatar.style.top initially is an empty string
const extractPos = (pos) => (!pos ? 20 : parseInt(pos.slice(0, -2)));

// function to move the coin random
const moveCoin = () => {
  const x = Math.floor(Math.random() * (window.innerWidth - coin.width));
  const y = Math.floor(Math.random() * (window.innerHeight - coin.height));
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
