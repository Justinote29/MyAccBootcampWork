const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
//this is how we tell express to look in the client folder for static content so it can open up the html and load it.
app.use(express.static("../client"));

//BODY PARSER- lets us pull data out of req.body- We need this for POST requests because they are send req.body-  Still pretty unclear about this
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//When working with databases:

//Connection- in pgconnection.js, this pulls ALL code from pgconnection and inserts it into the file.
const pg_connection = require("./connections/pgconnection");

//Now we make the connection.  This returns a promise.
pg_connection
  .connect()
  .then(function () {
    console.log("connected to pg");
  })
  .catch(function (err) {
    console.log(err);
  });

//Queries

app.get("/home", (req, res) => {
  res.send("I am Home");
});

//hardcoding user id for now

const user_id = 6;

//GET - read route- we made a query (q) to query our db and then run the query with our pg connection.  We just want to send the rows from the data object we give as a receipt.
app.get("/bucket", function (req, res) {
  let q = `
  SELECT 
  item_id AS id,
  item_id AS _id,
  description,
  is_complete as "isComplete",
  user_id,
  created_timestamp,
  modified_timestamp
  FROM bucketlist.items
  WHERE user_id = ${user_id}
  ORDER BY created_timestamp;
  `;
  //run the query we just made;
  pg_connection
    .query(q)
    .then(function (data) {
      res.json(data.rows);
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
    });
});

// //Create data route handler.  With a POST, req.body to send and get our info.  We need to parse it when it gets to the server because it comes in JSON- (body Parser).  This is building an API.
//create route
app.post("/bucket", (req, res) => {
  //we'll send a body with a key called description(for now, but this could change later on when we do the front end).  This is what the client types in (I think it's .body b/c it's a POST, but not sure)
  let description = req.body.description;
  let q = `
  INSERT INTO bucketlist.items(
    description,
    is_complete,
    user_id
  ) VALUES(
    '${description}',
    false,
    ${user_id}
  )
  RETURNING
    item_id AS _id,
    item_id AS id,
    description,
    is_complete AS "isComplete"
  
  `;
  console.log("post q is:", q);
  pg_connection
    .query(q)
    .then(function (data) {
      res.json(data.rows[0]);
    })
    .catch(function (err) {
      console.log(err);
      res.json({ message: "POSTing to the pg db failed" });
    });
});

//update route
//todo - getting some behavior I don't understand.  the data is being updated in teh DB but not in teh browser until the read when you refresh.  Also, the items seem to be returned in a different order when the page is refreshed after you update them.

app.put("/bucket/:id", (req, res) => {
  let item_id = req.params.id;
  let q = `UPDATE bucketlist.items
  SET is_complete  = NOT is_complete, modified_timestamp = current_timestamp
  WHERE item_id = ${item_id}
    RETURNING
    item_id AS _id,
    item_id AS id,
    description,
    is_complete AS "isComplete"
    modified_timestamp`;
  console.log(item_id);

  // SELECT * FROM bucketlist.items;

  pg_connection
    .query(q)
    .then(function (data) {
      console.log(data.rows);
      res.json(data.rows);
    })
    .catch(function (err) {
      console.log(err);
      res.json({ message: "Update to pg db failed" });
    });
});

//delete data

app.delete("/bucket/:id", (req, res) => {
  let item_id = req.params.id;
  let q = `DELETE FROM items 
  WHERE item_id = ${item_id} `;

  pg_connection
    .query(q)
    .then(function (data) {
      res.json(data);
      console.log(data);
    })
    .catch(function (err) {
      res.json({ message: "Delete to pg db failed" });
    });
});

// //READ data
// //PSUEDO-CODING EXAMPLE-planning what we'll do

// //route handler that uses GET method with /bucket route

// app.get("/bucket", (req, res) => {
//   //need to access DB- (talk to it)
//   //we've been using the model to access DB- We'll send back the whole DB with .find({})
//   BucketListItemModel.find({})
//     .then((result) => {
//       //no issues- do something (else) convert data to json before we send to client.
//       //send back everything from db to client

//       res.json(result);
//     })
//     .catch((error) => {
//       //issues- do something

//       //what we do if there are issues connecting

//       console.log(`Error with reading data on backend: `, error.message);
//       res.status(445).json({ message: "Unable to read data on backend." });
//     });
// });

// //DELETE data
// app.delete("/bucket/:id", (req, res) => {
//   let bucket_id = req.params.id;
//   //mongoose has a method called findByIdAndDelete()
//   //accessDB
//   BucketListItemModel.findByIdAndDelete(bucket_id)
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((error) => {
//       console.log(`Error deleting data from db`, error.message);
//       res.status(446).json({ message: "Unable to delete data with ID." });
//     });
// });

// //UPDATE data
// //goal is to update isComplete- we need to toggle it true/false

// app.put("/bucket/:id", (req, res) => {
//   let bucket_id = req.params.id;
//   //mongoose has a method called findById()
//   BucketListItemModel.findById(bucket_id)
//     .then((result) => {
//       //result is a JS object- document from the db consisting of a _id, description, isComplete, __v keys and their values.  Here, is toggle the boolean.
//       result.isComplete = !result.isComplete;
//       //this is a second call to our database to save the isComplete flip with .save(). We make the second call to the db within the first call.  We do it this way b/c we're using a boolean.

//       result
//         .save()
//         .then((updatedResult) => {
//           //to send back a copy of updated result
//           res.json(updatedResult);
//         })
//         .catch((error) => {
//           console.log(`Error updating data from db`, error.message);
//           res.status(475).json({ message: "Unable to update data." });
//         });
//       //2 ways to save data (from sonic app), with model or with data itself.  if you're using the model, you'll use create and pass in the data (like we did in post).  Here, since result is data, we'll use the save method (char.save from Sonic App)
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(`Error updating data in db`, error.message);
//       res.status(446).json({ message: "Unable to find data update with ID." });
//     });
// });

app.listen(PORT, () => {
  console.log(`PG Bucketlist API running on port ${PORT}`);
});
