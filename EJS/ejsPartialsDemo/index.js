const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//gives permission to browser to access this folder- anyone can see what's in the public folder
app.use(express.static("public"));

//requiring logger
const logger = require("morgan");
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/myDB", (req, res) => {
  let { firstName, lastName } = req.query;
  //   let firstName = req.query.firstname;
  //   let lastName = req.query.lastName;
  let result = `${firstName} ${lastName}`;
  res.send(result);
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
