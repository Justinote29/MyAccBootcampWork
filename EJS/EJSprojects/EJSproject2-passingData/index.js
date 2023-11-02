const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let messages = [
  { name: "Jim", message: "Hi, how are you?" },
  { name: "Jane", message: "How about pasta for dinner?" },
  { name: "Gary", message: "I like my pasta with butter" },
];

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/messages", (req, res) => {
  res.render("messages.ejs", { messages });
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
