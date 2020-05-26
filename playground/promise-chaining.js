require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5ecc6c80bd1c2b65d2893823", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
