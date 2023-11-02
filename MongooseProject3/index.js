require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const { DB, URI } = process.env;

const mongoose = require("mongoose");

let url = `${URI}/${DB}`;

let connectionObject = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin",
  user: "acc",
  pass: "acc_rocks_2020",
};

mongoose
  .connect(url, connectionObject)
  .then(() => {
    console.log(`Connected to ${DB} database`);
  })
  .catch((err) => {
    console.log(`Error coming from ${DB} database`, err);
  });

const userSchema = mongoose.Schema({
  username: String,
  age: Number,
  favorite_pizza: String,
  created: {
    type: Date,
    default: Date.now(),
  },
  member: {
    type: Boolean,
    required: [true, "Must be a member"],
  },
});

const UserModel = mongoose.model("users", userSchema);

// UserModel.create({
//   username: "Nancy",
//   age: 22,
//   favorite_pizza: "pepperoni",
// })
//   .then((receipt) => console.log(receipt))
//   .catch((err) => console.log(`Issue saving data to database`, err));

//

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`Users App running on port ${port}`);
});
