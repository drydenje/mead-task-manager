require("../src/db/mongoose");
const Task = require("../src/models/task");

const _id = "5ecbf08e63e34f277c0e047d";
Task.findByIdAndDelete(_id)
  .then((task) => {
    return Task.countDocuments({ completed: false });
  })
  .then((results) => {
    console.log("Count:", results);
  })
  .catch((e) => console(e));
