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

// remove the 'px' at the end of the string
// avatar.style.top initially is an empty string
const extractPos = (pos) => (!pos ? 20 : parseInt(pos.slice(0, -2)));

const avatar = document.getElementById('player');
const coin = document.getElementById('coin');

function initCoin() {
  spaceWidth = window.innerHeight - coin.height;
  spaceHeight = window.innerWidth - coin.width;
  return [spaceWidth, spaceHeight];
}

function moveCoin(spaceWidth, spaceHeight) {
  coin.style.top = Math.round(Math.random() * spaceWidth) + 'px';
  coin.style.left = Math.round(Math.random() * spaceHeight) + 'px';
}

function game() {
  let [spaceWidth, spaceHeight] = initCoin();
  moveCoin(spaceWidth, spaceHeight);
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
        avatar.style.left =
          currLeft < this.innerWidth - 150
            ? `${currLeft + 50}px`
            : `${this.innerWidth - 100}px`;
        break;
      case 'ArrowLeft' || 'Left':
        // console.log(currLeft, this.innerWidth);
        currLeft = extractPos(avatar.style.left);
        avatar.style.left = currLeft > 50 ? `${currLeft - 50}px` : 0;
        break;
    }
  });
}

game();
