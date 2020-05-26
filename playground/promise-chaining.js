require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5ecc6c80bd1c2b65d2893823", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5ecc6c80bd1c2b65d2893823", 2)
  .then((count) => {
    console.log("Count:", count);
  })
  .catch((e) => {
    console.log(e);
  });
