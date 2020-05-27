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

const bcrypt = require("bcryptjs");

const myFunction = async () => {
  const password = "Red12345!";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log("Password:", password);
  console.log("Hashed:", hashedPassword);

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log(isMatch);
};

myFunction();
