export class Pet {

  constructor(food, play, sleep, poop) {
    this.food = food;
    this.play = play;
    this.sleep = sleep;
    this.poop = poop;
    this.status = "alive";
  }

  subtractFoodOverTime() {
    setInterval(() => {
      this.food --;
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

  subtractPoopOverTime() {
    setInterval(() => {
      this.poop --;
    }, 10000);
  }

  replenishFood() {
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

  killagatchi() {
    if (this.food <= 0 || this.play  <= 0|| this.poop <= 0 || this.sleep <= 0){
      this.status = "dead";
      return this.status;
    }
  }

  isItAlive() {
    if (this.status === "dead"){
      alert("Your pet has died. You monster.");
    }
  }





}


// setTimeout(function(){
//   alert("Hello friend! Maybe you should sign up for our newsletter!");
// }, 20000);
