//to import and run (require) dotenv
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//destructuring the process.env object to create these two variables from the .env file we made and stored things in and we log them here to make sure we've got the data.
const { DB, URI } = process.env;
//console.log(DB, " ", URI);

//When working with databases
//1.CONNECTION - we'll use mongoose
const mongoose = require("mongoose");
//building our db url (like an endpoint),we are telling it to go to the class server and creates or tells which db to use (like use query in studio3T)
let url = `${URI}/${DB}`;

//username and password (like when we were connecting to sever in studio3T, but here we're putting in domain name not ip address), this is the info we'll need,  We should put user and pass in .env
let connectionObject = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin",
  user: "acc",
  pass: "acc_rocks_2020",
};
//this connects to our db.
mongoose
  .connect(url, connectionObject)
  .then(() => {
    console.log(`Connected to ${DB} database`);
  })
  .catch((err) => {
    console.log(`Error coming from ${DB} database`, err);
  });

//2.BLUEPRINTS
//a)Schema- our DB document structure
//b)Model- to make documents
//a) normal best practice is to save schema and save it to a variable to save what's returned and gives us access to some methods.  This is our "cookie cutter" and how we can create structure in mongodb.  Below, we can require an item so it won't let us submit a document without it, we'll get an error, you can give a custom message too, but that's optional.  Default will be sent as the default even if left off. maxlen makes the max length 10 characters.
const characterSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 10,
    minLength: [5, "Must have min length of 5 characters"],
    required: [true, "Name was messed up"],
  },
  age: {
    type: Number,
    min: [16, "Must be at least 16"],
  },
  breed: {
    type: String,
    required: [true, "Must have a breed type"],
  },
  villain: {
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

//b)Model (takes at least 2 arguments).  We need to build the collection we'll use.  first argument is the name of the collection we want to use, 2nd argument is which schema to apply.  We'll create "characters" collection and assign it the characterSchema and save it to a variable to save what's returned and gives us access to some methods.  Models are used to make "documents"
const CharacterModel = mongoose.model("characters", characterSchema);

//3.QUERIES- we're creating some data first here.  This char1 is an instance of the CharacterModel

// let char1 = CharacterModel({
//   name: " Metal Sonic",
//   age: 16,
//   breed: "hedgehog",
//   villain: false,
// });

//similar to save, but we hardcode the "character" inside the model.create. Takes 2 args, 1st- document, 2nd - promise based so we use .then and .catch.
// CharacterModel.create({
//   name: "Eggman",
//   villain: true,
//   breed: "human being",
//   age: 80,
// })
//   .then((receipt) => console.log(receipt))
//   .catch((error) => console.log(`Error creating data to db: `, error));

//to search DB
CharacterModel.find({ name: "Sonic" })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//to put data in db.  we'll get a "receipt" back from DB, here we'll call it "data" and console log it to see it.  like db.characters.insertOne(char1)
// char1
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(`Issues saving data to database`, err);
//   });

// app.get("/", (req, res) => {
//   res.redirect("/home");
// });

// app.get("/home", (req, res) => {
//   res.render("home.ejs");
// });

// app.listen(port, () => {
//   console.log(`Sonic App running on port ${port}`);
// });
