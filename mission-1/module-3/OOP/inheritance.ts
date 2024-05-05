{
  class Persone {
    name: string;
    age: string;
    address: string;
    constructor(name: string, age: string, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }

  class Student extends Persone {
    constructor(name: string, age: string, address: string) {
      super(name, age, address);
    }

    getRest(hours: number) {
      console.log(hours);
    }
  }
  class Teacher extends Persone {
    designation: string;
    constructor(
      name: string,
      age: string,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    getRest(hours: number) {
      console.log(hours);
    }
  }

  const student1 = new Student("nahid", "19", "dhaka");
  const teacher = new Teacher("nahid", "19", "dhaka", "head teacher");
}
