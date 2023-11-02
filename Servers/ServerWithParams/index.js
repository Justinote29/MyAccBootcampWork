const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("I am home route");
});

//the colon means it's a variable, here, we've created a variable called fruit.  This is called a param when it's part of our route.  Variables in a url are called params.  Try to name them so they represent the values.
app.get("/:fruit", (req, res) => {
  //do stuff here
  res.send(`I am the ${req.params.fruit} route`);
  res.end();
});

app.get("/:fruit/home", (req, res) => {
  res.send(`I am the ${req.params.fruit} route again`);
});

app.get("/money/:amount", (req, res) => {
  //we can do anything we want here.  Send, redirect, run functions, make http requests to consume apis, etc.
  //   res.send(`I have $${Number(req.params.amount) * 2}!`);
  console.log(typeof req.params.amount);

  let result = Number(req.params.amount);
  // if (isNaN(result){
  //     res.send(`Please supply a number`)
  // }
  // else {
  //     res.send(`I have $${Number(req.params.amount) + 2}!`)
  // }
  res.send(
    isNaN(result)
      ? `Please 
  Supply a number`
      : `I have $${result} + 2}`
  );
});

app.listen(port, () => {
  console.log(`Server with Params running on port ${port}`);
});
