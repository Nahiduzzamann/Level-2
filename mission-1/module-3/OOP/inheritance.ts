{
  class Persone {
   readonly id:string; // access modifier
    name: string;
    age: string;
    address: string;
    constructor(id:string,name: string, age: string, address: string) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }

  class Student extends Persone {
    constructor(id:string,name: string, age: string, address: string) {
      super(id,name, age, address);
    }

    getRest(hours: number) {
      console.log(hours);
    }
  }
  class Teacher extends Persone {
    designation: string;
    constructor(
      id:string,
      name: string,
      age: string,
      address: string,
      designation: string
    ) {
      super(id,name, age, address);
      this.designation = designation;
    }

    getRest(hours: number) {
      console.log(hours);
    }
  }

  const student1 = new Student("jdyfygfkuyr","nahid", "19", "dhaka");
  const teacher = new Teacher("jdyfygfkuyr","nahid", "19", "dhaka", "head teacher");
}
