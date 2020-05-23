// CRUD, create, read, update, delete

const { MongoClient, ObjectID } = require("mongodb");
const id = new ObjectID();

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("tasks")
      .deleteOne({ description: "Buy milk" })
      .then((result) => {
        console.log(result.deletedCount);
      })
      .catch((error) => {
        console.log(error);
      });

    // db.collection("users")
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users")
    // .updateOne(
    //   {
    //     _id: new ObjectID("5ec81716f855b6259448c84e"),
    //   },
    //   {
    //     // $set: {
    //     //   name: "Mike",
    //     // },
    //     $inc: {
    //       age: 1,
    //     },
    //   }
    // )
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log("Modified:", result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
