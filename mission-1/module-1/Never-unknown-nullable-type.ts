{
  //nullable type
  const showName = (name: string | null): string => {
    return "";
  };

  showName('name')
  //never type
  const throwError =(msg:string):never =>{
    throw new Error(msg)
  }
}
