const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//importing morgan to use it as the logger.
const logger = require("morgan");
//this adds more functionality to app
//pass in a string for type of data we want (dev version)
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  let cat = "woof";
  //can take two arguments, 1st- file we want rendered, 2nd - object containing data (here we pass dog variable that has a value of cat (which has a value of "woof"))  This is how we can pass data from server to file.
  res.render("home.ejs", { dog: cat });
});

app.get("/about", (req, res) => {
  let monster = {
    name: "dracula",
    type: "vampire",
  };
  //we pass it person object as a variable and pass it the monster object.  We can do this like person: monster or if it has the same name as the variable we're passing, we can just reduce it to monster (which is both the key and the value- like monster: monster)
  res.render("about.ejs", { monster });
});

app.get("/contact", (req, res) => {
  let people = ["mom", "nikki", "ingy"];
  res.render("contact.ejs", { people });
});

app.get("/cartoon", (req, res) => {
  const people = [
    { fname: "George", lname: "Of the Jungle" },
    { fname: "Shep", lname: "the Elephant" },
  ];
  res.render("cartoon.ejs", { people });
});

app.get("/money/:amount", (req, res) => {
  let amount = req.params.amount;
  res.render("money.ejs", { amount: amount * 2 });
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
