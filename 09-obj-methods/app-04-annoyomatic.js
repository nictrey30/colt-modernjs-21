const annoyer = {
  phrases: [
    'literally',
    'cray cray',
    "I can't even",
    'Totes!',
    'YOLO',
    "Can't Stop, Won't Stop"
  ],
  pickPhrase() {
    const { phrases } = this; // equivalent to: const phrases = this.phrases;
    // random index from the phrases array
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    // will not work, because this will get the context of setInterval,
    // because setInterval is calling the function, not us
    // setInterval(function () {
    //   console.log(this.pickPhrase());
    // }, 2000);

    // arrow functions don't get their own this, so it will pick up the this from the object
    // in this case arrow functions are better to use, because we don't want a new this(called in this case by setInterval)
    this.timerID = setInterval(() => {
      console.log(this.pickPhrase());
    }, 2000);
  },
  stop() {
    clearInterval(this.timerID);
  }
};
