const obj = {
  id: 1,
  username: "Rabo",
  email: "raboyus@agmail.com",
  password: "password35678",
};
//copy the obj while excluding password
console.log(JSON.stringify(obj, ["id", "username", "email"]));
console.log(JSON.parse(JSON.stringify(obj, ["id", "username", "email"])));

//another way
console.log(
  JSON.parse(
    JSON.stringify(obj, (key, value) =>
      key === "password" ? undefined : value
    )
  )
);
