{
  //constrain means which property must be included
  const addStudent = <T extends { id: number }>(obj: T) => {
    const courseName = "L2";
    return {
      ...obj,
      courseName,
    };
  };

  addStudent<{ id: number; name: string }>({ name: "nahid", id: 76 });

  //  constrain using keyof

  const getPropertyValue =<O,K extends keyof O> (obj:O, k:K) => {
    return obj[k];
  };

  const userr = {
    name: "nahsd",
    id: 8675,
  };

  getPropertyValue(userr,'name')
}
