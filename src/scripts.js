export class Pet {

  constructor(food, play, sleep, poop) {
    this.food = food;
    this.play = play;
    this.sleep = sleep;
    this.poop = poop;
  }

  subtractFoodOverTime() {
    setInterval(() => {
      this.food --;
    }, 10000);
  }

  subtractPlayOverTime() {
    setInterval(() => {
      this.food --;
    }, 10000);
  }

  subtractSleepOverTime() {
    setInterval(() => {
      this.food --;
    }, 10000);
  }

  subtractPoopOverTime() {
    setInterval(() => {
      this.food --;
    }, 10000);
  }

  replenishFood() {
    this.food = 10;
    return this.food;
  }

  replenishPlay() {
    this.food = 10;
    return this.food;
  }

  replenishSleep() {
    this.food = 10;
    return this.food;
  }

  cleanPoop() {
    this.food = 10;
    return this.food;
  }

  killagatchi() {
    if (this.food <= 0 || this.play  <= 0|| this.poop <= 0 || this.sleep <= 0){
      alert("Your pet is dead. You monster.");
      return true;
    }
  }





}


// setTimeout(function(){
//   alert("Hello friend! Maybe you should sign up for our newsletter!");
// }, 20000);
