export class Pet {

  constructor(food, play, sleep, poop) {
    this.food = food;
    this.play = play;
    this.sleep = sleep;
    this.poop = poop;
    this.status = "alive";
    this.warnFood = "";
    this.warnPlay = "";
    this.warnSleep = "";
    this.warnPoop = "";
    this.gameOver = "";
  }

  subtractFoodOverTime() {
    setInterval(() => {
      this.food--;
      return this.food;
    }, 10000);
  }

  subtractPlayOverTime() {
    setInterval(() => {
      this.play --;
    }, 10000);
  }

  subtractSleepOverTime() {
    setInterval(() => {
      this.sleep --;
    }, 10000);
  }
                               //Write this code!!! VVVVVVVVVVVVVVVVVVV
  subtractPoopOverTime() {    //add poop to the screen in certain spots.
                             //will hide image files and show per certain second hit.
    setInterval(() => {
      this.poop --;
    }, 10000);
  }

  replenishFood() {     //add animation or gif to whatever image or sprite we use
    this.food = 10;
    return this.food;
  }

  replenishPlay() {
    this.play = 10;
    return this.play;
  }

  replenishSleep() {
    this.sleep = 10;
    return this.sleep;
  }

  cleanPoop() {
    this.poop = 10;
    return this.poop;
  }

  killagatchi() {        // change so that it has to be mutiple 0 if not all to get a death.
    if (this.food <= 0 || this.play  <= 0|| this.poop <= 0 || this.sleep <= 0){
      this.status = "dead";
    }
    console.log(this.status);
    }

  isItAlive() {
    setInterval(() => {
      console.log(this.status==="dead");
      if (this.status === "dead") {
        this.gameOver = "Your pet has died. You monster.";
      } else {
        this.gameOver = "something failed.";
      }
    }, 10000);
  }

  foodCheck() {         // add (in front-end?) img or sprite to look sad for low levels.
    setInterval(() => {
      if (this.food < 4) {
        this.warnFood = "Your current food level is low!";
      } else {
        this.warnFood = "something happened!";
      }
    }, 10000);

  }

  sleepCheck() {

    setInterval(() => {
      if (this.sleep < 4) {
        this.warnSleep = "Your current sleep level is low!";
      } else {
        this.warnSleep = "somthing happened!";
      }
    }, 10000);
  }

  poopCheck() {

    setInterval(() => {
      if (this.poop < 4) {
        this.warnPoop = "Your current cleanliness level is low!";
      } else {
        this.warnPoop = "somthing happened!";
      }
    }, 10000);
  }

  playCheck() {

    setInterval(() => {
      if (this.play < 4) {
        this.warnPlay = "Your current happiness level is low!";
      } else {
        this.warnPlay = "somthing happened!";
      }
    }, 10000);
  }
}


// setTimeout(function(){
//   alert("Hello friend! Maybe you should sign up for our newsletter!");
// }, 20000);
