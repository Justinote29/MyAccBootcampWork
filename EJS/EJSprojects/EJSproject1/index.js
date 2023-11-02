const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const pizza = "I like my pizza with extra pineapple.";

const cappuccino = "I like my cappuccino sweet.";

const fries = "I like my fries crispy with extra salt.";

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs", { pizza });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { fries });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { cappuccino });
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
