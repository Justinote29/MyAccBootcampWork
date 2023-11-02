const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//importing data from data.js
const { data } = require("./data.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

//passing data to homepage
app.get("/home", (req, res) => {
  res.render("home.ejs", { data: data });
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
