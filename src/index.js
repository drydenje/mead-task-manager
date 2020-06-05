const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const routers = [userRouter, taskRouter];

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routers);

app.listen(port, () => {
  console.log("Server is up on port:", port);
});

const Task = require("./models/task");
const User = require("./models/user");
const main = async () => {
  // const task = await Task.findById("5eda9dd575e1530dfbb7e072");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);
  const user = await User.findById("5eda9bed235a1b0b9d859227");
  await user.populate("tasks").execPopulate();

  console.log(user.tasks);
};

main();
