{
  //create type using loop by mapped

  type User1 = {
    id: string;
    phone: string;
  };

  type Name = User1["phone"]; // look up type

  type Owner = {
    [key in keyof User1]: number; //mapped type
  };


//manually insert type

type InsertType<T> = {
    [key in keyof T]:T[key] ; 
  };


  const user:InsertType<{name:string ,id:number}> ={
    name:'nahid',
    id:54536
  }
}
