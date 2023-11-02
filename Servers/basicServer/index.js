const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//res.redirect redirects us to localhost:3000/home when we go to localhost:3000 like amazon.com could take us to our homepage.
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("I am home route");
});

app.get("*", (req, res) => {
  res.send("I am the everything else");
});

app.listen(port, () => console.log(`Basic Server on port ${port}`));
