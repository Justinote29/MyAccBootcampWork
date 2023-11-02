const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//this is how we tell express to look in the client folder for static content so it can open up the html and load it.
app.use(express.static("../client"));

//BODY PARSER- lets us pull data out of req.body- We need this for POST requests because they are send req.body-  Still pretty unclear about this
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//When working with databases:

//1)Connection- in mongoconnection.js, this pulls ALL code from mongoconnection and inserts it into the file.
require("./connections/mongoconnection");

//2.Blueprints- Schema and Models

//A- We build our schema and require the description (with a custom message) and set isComplete to false.

//B- Make the model- we create the collection and give it a name and pass in the schema we build above to have consistency when we create items.  We'll put this in the models folder and name it BucketListItemModel.js
//import our bucketlistitemmodel
const { BucketListItemModel } = require("./models/BucketListItemModel");

console.log(BucketListItemModel);

//3.Queries

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("I am Home");
});

//Create data route handler.  With a POST, req.body to send and get our info.  We need to parse it when it gets to the server because it comes in JSON- (body Parser).  This is building an API.
app.post("/bucket", (req, res) => {
  //we'll send a body with a key called description(for now, but this could change later on when we do the front end).  This is what the client types in (I think it's .body b/c it's a POST, but not sure)
  let description = req.body.description;
  //send data to database- we'll do the create method -  we don't need the id b/c mongo will create it and we don't need isComplete b/c we set it to default.  We can only use description b/c it's the same name as the variable we set it to description:description
  BucketListItemModel.create({
    description,
  })
    .then((result) => {
      //by default this sends a successful 200 status code
      res.json(result);
    })
    .catch((error) => {
      console.log(`Error creating data on the backend`, error);
      //this is because we told the client we'd send back json, so this is sending an object in json with an error message.  We send this code so we know there was an issue creating the data.  We can set teh http status code (can be anything) and send back a message encoded as JSON.
      res.status(444).json({ message: "Unable to create data on backend." });
    });
});

//READ data
//PSUEDO-CODING EXAMPLE-planning what we'll do

//route handler that uses GET method with /bucket route

app.get("/bucket", (req, res) => {
  //need to access DB- (talk to it)
  //we've been using the model to access DB- We'll send back the whole DB with .find({})
  BucketListItemModel.find({})
    .then((result) => {
      //no issues- do something (else) convert data to json before we send to client.
      //send back everything from db to client

      res.json(result);
    })
    .catch((error) => {
      //issues- do something

      //what we do if there are issues connecting

      console.log(`Error with reading data on backend: `, error.message);
      res.status(445).json({ message: "Unable to read data on backend." });
    });
});

//DELETE data
app.delete("/bucket/:id", (req, res) => {
  let bucket_id = req.params.id;
  //mongoose has a method called findByIdAndDelete()
  //accessDB
  BucketListItemModel.findByIdAndDelete(bucket_id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(`Error deleting data from db`, error.message);
      res.status(446).json({ message: "Unable to delete data with ID." });
    });
});

//UPDATE data
//goal is to update isComplete- we need to toggle it true/false

app.put("/bucket/:id", (req, res) => {
  let bucket_id = req.params.id;
  //mongoose has a method called findById()
  BucketListItemModel.findById(bucket_id)
    .then((result) => {
      //result is a JS object- document from the db consisting of a _id, description, isComplete, __v keys and their values.  Here, we toggle the boolean.
      result.isComplete = !result.isComplete;
      //this is a second call to our database to save the isComplete flip with .save(). We make the second call to the db within the first call.  We do it this way b/c we're using a boolean.
      result
        .save()
        .then((updatedResult) => {
          //to send back a copy of updated result
          res.json(updatedResult);
        })
        .catch((error) => {
          console.log(`Error updating data from db`, error.message);
          res.status(475).json({ message: "Unable to update data with id" });
        });
      //2 ways to save data (from sonic app), with model or with data itself.  if you're using the model, you'll use create and pass in the data (like we did in post).  Here, since result is data, we'll use the save method (char.save from Sonic App)
      console.log(result);
    })
    .catch((error) => {
      console.log(`Error updating data in db`, error.message);
      res.status(446).json({ message: "Unable to find data update with ID." });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
