const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("I am the home route");
});

app.listen(port, () => console.log(`Basic Server on port ${port}`));
