const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/task-manager-api";

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const Task = mongoose.model("Task", {
  description: { type: String, trim: true, required: true },
  completed: { type: Boolean, required: false, default: false },
});
