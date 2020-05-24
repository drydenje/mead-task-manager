const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/task-manager-api";

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// });

// const me = new User({ name: "Jeremy", age: 30 });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!:", error);
//   });

const Task = mongoose.model("Task", {
  description: { type: String },
  completed: { type: Boolean },
});

const t = new Task({ description: "Buy some milk", completed: false });
t.save()
  .then(() => {
    console.log(t);
  })
  .catch((error) => {
    console.log("Error!:", error);
  });
