const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

var order = ["eggs", "oatmilk", "kale"];

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home", { pastry: "donuts" });
});

app.get("/about/:food", (req, res) => {
  let food = req.params.food;
  res.render("about", { food });
});

app.get("/jobs", (req, res) => {
  var data = [
    { name: "Angela", occupation: "software engineer", company: "Facebook" },
    { name: "Paul", occupation: "web developer", company: "Twitter" },
    { name: "Matt", occupation: "instructor", company: "School" },
    { name: "Louise", occupation: "sales representative", company: "Dell" },
  ];
  res.render("jobs", { data });
});

app.get("/order", (req, res) => {
  res.render("order", { order: order });
});

app.post("/finish", (req, res) => {
  console.log(req.body);
  order.push(req.body.food);
  res.redirect("/order");
});

app.listen(port, () => console.log(`Server on port ${port}`));
