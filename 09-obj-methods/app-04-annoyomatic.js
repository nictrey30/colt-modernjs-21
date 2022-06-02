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
    const { phrases } = this;
    // random index from the phrases array
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    // will not work, because this will get the context of setInterval
    // setInterval(function () {
    //   console.log(this.pickPhrase());
    // }, 2000);
    // arrow functions don't get their own this
    this.timerID = setInterval(() => {
      console.log(this.pickPhrase());
    }, 2000);
  },
  stop() {
    clearInterval(this.timerID);
  }
};
