const btn = document.querySelector('button');

// setTimeout(() => {
//   btn.style.transform = 'translateX(100px)';
//   setTimeout(() => {
//     btn.style.transform = 'translateX(200px)';
//     setTimeout(() => {
//       btn.style.transform = 'translateX(300px)';
//       setTimeout(() => {
//         btn.style.transform = 'translateX(400px)';
//         setTimeout(() => {
//           btn.style.transform = 'translateX(500px)';
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = (element, amount, delay, onSucces, onFailure) => {
  setTimeout(() => {
    // get the body width
    const bodyBoundry = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    // get the current X position of the element
    const currLeft = element.getBoundingClientRect().left;
    // check if the btn right margin is going over the right margin of the body
    if (elRight + amount > bodyBoundry) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSucces();
    }
  }, delay);
};
// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000);
//       });
//     });
//   });
// });
// LOOK AT THIS UGLY MESS!
moveX(
  btn,
  300,
  1000,
  () => {
    //success callback
    moveX(
      btn,
      300,
      1000,
      () => {
        //success callback
        moveX(
          btn,
          300,
          1000,
          () => {
            //success callback
            moveX(
              btn,
              300,
              1000,
              () => {
                //success callback
                moveX(
                  btn,
                  300,
                  1000,
                  () => {
                    //success callback
                    alert('YOU HAVE A WIDE SCREEN!');
                  },
                  () => {
                    //failure callback
                    alert('CANNOT MOVE FURTHER!');
                  }
                );
              },
              () => {
                //failure callback
                alert('CANNOT MOVE FURTHER!');
              }
            );
          },
          () => {
            //failure callback
            alert('CANNOT MOVE FURTHER!');
          }
        );
      },
      () => {
        //failure callback
        alert('CANNOT MOVE FURTHER!');
      }
    );
  },
  () => {
    //failure callback
    alert('CANNOT MOVE FURTHER!');
  }
);
