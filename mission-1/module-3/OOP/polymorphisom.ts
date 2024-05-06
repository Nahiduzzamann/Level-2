{
  class Person {
    getsleep() {
      console.log(`i am sleeping for 8 hour per day`);
    }
  }
  class Student extends Person {
    getsleep() {
      console.log(`i am sleeping for 7 hour per day`);
    }
  }
  class Developer extends Person {
    getsleep() {
      console.log(`i am sleeping for 6 hour per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getsleep(); // same function but give us different result for different instance is called polymorphisom
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);
}
