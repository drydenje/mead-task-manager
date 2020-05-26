require("../src/db/mongoose");
const Task = require("../src/models/task");

// const _id = "5ecbf08e63e34f277c0e047d";
// Task.findByIdAndDelete(_id)
//   .then((task) => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then((results) => {
//     console.log("Count:", results);
//   })
//   .catch((e) => console.log(e));

const _id = "5ecbf06afff37627402c1405";
const deleteTaskAndCount = async (id) => {
  const user = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount(_id)
  .then((count) => {
    console.log("Count:", count);
  })
  .catch((e) => {
    console.log(e);
  });
