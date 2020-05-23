// CRUD, create, read, update, delete

const { MongoClient, ObjectID } = require("mongodb");
const id = new ObjectID();

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);
  }
);

// db.collection("tasks").findOne(
//   { _id: new ObjectID("5ec818611c2f6a26de0da783") },
//   (error, task) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log(task);
//   }
// );

// db.collection("tasks")
//   .find({ completed: false })
//   .toArray((error, tasks) => {
//     console.log(tasks);
//   });

// to seach by id
// _id: new ObjectID('id key to convert')
// db.collection("users").findOne({ name: "Jen", age: 1 }, (error, user) => {
//   if (error) {
//     return console.log("Unable to fetch");
//   }

//   console.log(user);
// });

// db.collection("users")
//   .find({ age: 27 })
//   .toArray((error, users) => {
//     console.log(users);
//   });

// db.collection("users")
//   .find({ age: 27 })
//   .count((error, count) => {
//     console.log(count);
//   });

// db.collection("users").insertOne(
//   {
//     _id: id,
//     name: "Vikram",
//     age: 43,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user!");
//     }

//     console.log(result.ops);
//   }
// );

// db.collection("users").insertMany(
//   [
//     {
//       name: "Jen",
//       age: 28,
//     },
//     {
//       name: "Gunther",
//       age: 27,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert documents!");
//     }
//     console.log(result.ops);
//   }
// );
