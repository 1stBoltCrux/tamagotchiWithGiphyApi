import { Pet } from './../src/scripts.js'

// describe('Pet', function(){
//   let tamagotchi = new Pet(10, 10, 10, 10);
//
//   beforeEach(function(){
//     jasmine.clock().install();
//     tamagotchi.food = 10;
//     tamagotchi.play = 10;
//     tamagotchi.sleep = 10;
//     tamagotchi.poop = 10;
//     tamagotchi.subtractFoodOverTime();
//     tamagotchi.subtractSleepOverTime();
//     tamagotchi.subtractPlayOverTime();
//     tamagotchi.subtractPoopOverTime();
//     tamagotchi.foodCheck();
//     tamagotchi.sleepCheck();
//     tamagotchi.playCheck();
//     tamagotchi.poopCheck();
//     tamagotchi.isItAlive();
//
//   });
//
//   afterEach(function(){
//     jasmine.clock().uninstall();
//     tamagotchi.subtractFoodOverTime();
//     tamagotchi.subtractSleepOverTime();
//     tamagotchi.subtractPlayOverTime();
//     tamagotchi.subtractPoopOverTime();
//     tamagotchi.foodCheck();
//     tamagotchi.sleepCheck();
//     tamagotchi.playCheck();
//     tamagotchi.poopCheck();
//     tamagotchi.isItAlive();
//
//   });
//
//
//   it('should test whether food level is full', function(){
//     expect(tamagotchi.food).toEqual(10);
//   });
//
//   it('should test whether food level is 9 after 10000 milliseconds', function(){
//
//     jasmine.clock().tick(10000);
//     expect(tamagotchi.food).toEqual(9);
//   });
//
//   it('should test whether food level can be set to a specific value', function(){
//     tamagotchi.replenishFood();
//     // jasmine.clock().tick(10000);
//     expect(tamagotchi.food).toEqual(10);
//   });
//
//   it('should test whether any of the pets levels have reached zero', function(){
//     let tamagotchi2 = new Pet(0, 10, 10, 10);
//     let dead = tamagotchi2.killagatchi();
//     // jasmine.clock().tick(10000);
//     expect(tamagotchi2.status).toEqual("dead");
//   });
//
//   it('should test whether the pets status is alive', function(){
//     let tamagotchi3 = new Pet(10, 10, 10, 10);
//
//     // jasmine.clock().tick(10000);
//     expect(tamagotchi3.status).toEqual("alive");
//   });
//
//   it('should test to see if food value is below 4', function(){
//     jasmine.clock().tick(70000);
//     console.log(tamagotchi.food);
//     // console.log(tamagotchi.warn);
//     expect(tamagotchi.warnFood).toEqual("Your current food level is low!");
//   });
//
//   it('should test to see if sleep value is below 4', function(){
//     jasmine.clock().tick(70000);
//     tamagotchi.sleepCheck();
//     console.log(tamagotchi.sleep);
//     // console.log(tamagotchi.warn);
//     expect(tamagotchi.warnSleep).toEqual("Your current sleep level is low!");
//   });
//
//   it('should test to see if play value is below 4', function(){
//     jasmine.clock().tick(70000);
//     tamagotchi.playCheck();
//     console.log(tamagotchi.warnPlay);
//     // console.log(tamagotchi.warn);
//     expect(tamagotchi.warnPlay).toEqual("Your current happiness level is low!");
//   });
//
//   it('should test to see if poop value is below 4', function(){
//     // jasmine.clock().tick(70000);
//     tamagotchi.poopCheck();
//     console.log(tamagotchi.warnPoop);
//     // console.log(tamagotchi.warn);
//     expect(tamagotchi.warnPoop).toEqual("Your current cleanliness level is low!");
//   });
// });


  describe('Pet', function(){
    let tamagotchi = new Pet(10, 10, 10, 10);

    beforeEach(function(){
      jasmine.clock().install();
      tamagotchi.food = 10;
      tamagotchi.play = 10;
      tamagotchi.sleep = 10;
      tamagotchi.poop = 10;
      tamagotchi.subtractFoodOverTime();
      tamagotchi.subtractSleepOverTime();
      tamagotchi.subtractPlayOverTime();
      tamagotchi.subtractPoopOverTime();
      tamagotchi.foodCheck();
      tamagotchi.sleepCheck();
      tamagotchi.playCheck();
      tamagotchi.poopCheck();
      tamagotchi.isItAlive();
      jasmine.clock().tick(100000);

    });
  it('should test to see if tamagotchi is alive', function(){
    //what the heck is going on here? jasmine.clock does not work above these functions, but test succeeds if it is below both, or in between...
    // let tamagotchi = new Pet(10, 10, 10, 10);
    tamagotchi.killagatchi();
    // tamagotchi.isItAlive();


    console.log(tamagotchi.gameOver);
    console.log(tamagotchi.status);
    console.log(tamagotchi);
    expect(tamagotchi.gameOver).toEqual("Your pet has died. You monster.");
  });

});
