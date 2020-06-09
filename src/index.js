const express = require("express");
require("./db/mongoose");

// routes
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const routers = [userRouter, taskRouter];

const app = express();
const port = process.env.PORT || 3000;

const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    // in bytes (1mb = 1000000)
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload a Word document"));
    }

    cb(undefined, true);

    // cb(new Error('File must be a PDF'))
    // cb(undefined, true)
    // cd(undefined, false)
  },
});
app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
});

app.use(express.json());
app.use(routers);

app.listen(port, () => {
  console.log("Server is up on port:", port);
});
