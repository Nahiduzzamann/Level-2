{
  // abstraction: 1. interface 2. abstract

  //interface using
  //idea
  interface Vechicle1 {
    startEngine(): void;
    stopEngine(): void;
    moveEngine(): void;
  }
  //real implemantation
  class Car1 implements Vechicle1 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stopinbg the car engine`);
    }
    moveEngine(): void {
      console.log(`i am moving the car engine`);
    }
    test() {
      console.log("just testing");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.moveEngine(); // we implement a abstruction using above interface. we get idea from interface then we real implement bellow is calld abstruction
//-----------------------------------------------------------------------------
  //abstruc class
  //idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract moveEngine(): void;
    test() {
      console.log("just testing");
    }
  }

  //implemantation
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stopinbg the car engine`);
    }
    moveEngine(): void {
      console.log(`i am moving the car engine`);
    }
  }
  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();
  ///
}
