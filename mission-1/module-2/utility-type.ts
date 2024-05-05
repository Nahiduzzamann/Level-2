{
  //pick

  type User = {
    name: string;
    id: number;
    email?: string;
  };

  type Name = Pick<User, "name" | "email">;

  //omit
  type ContactInfo = Omit<User, "id">;

  //   Required
  type PersoneRequired = Required<User>;
  //   Partial
  type PersonePartial = Partial<User>;
  //   Readonly
  type PersonReadOnly = Readonly<User>;
  const person1: PersonReadOnly = {
    name: "hyjg",
    id: 675,
    email: "jhgvh",
  };
// Record

  type MyObj =Record<string,string>

  const obj1 :MyObj={
    a:'kjjfhg',
    b:'hrgf',
  }
}
