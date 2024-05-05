{
  const user: {
    id: number;
    name: { firstName: string; lastName: string };
    phone: string;
  } = {
    id: 123,
    name: {
      firstName: "hgdv",
      lastName: "jhfdg",
    },
    phone: "82734098",
  };

  const {
    id,
    name: { firstName },
  } = user;

  const myFriends = ["normalF", "goodF", "bestF", "othersF1", "othersF2"];

  const [, , bestF, ...other] = myFriends;
}
