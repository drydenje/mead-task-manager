// CRUD, create, read, update, delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");
const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

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

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Buy milk",
    //       completed: true,
    //     },
    //     {
    //       description: "Clean up desk",
    //       completed: false,
    //     },
    //     {
    //       description: "Change tires",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

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
  }
);
