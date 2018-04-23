export class Pet {

  constructor(food, play, sleep, poop) {
    this.food = food;
    this.play = play;
    this.sleep = sleep;
    this.poop = poop;
  }

  subtractOverTimeFood() {
    setInterval(() => {
      this.food --;
    }, 10000);
  }





}


// setTimeout(function(){
//   alert("Hello friend! Maybe you should sign up for our newsletter!");
// }, 20000);
