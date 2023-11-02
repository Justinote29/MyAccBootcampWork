const needle = require("needle");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/quote", (req, res) => {
  needle.get("https://type.fit/api/quotes", (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      var randomNum = Math.floor(Math.random() * obj.length);
      var text = obj[randomNum].text;
      var author = obj[randomNum].author;
      res.render("quote.ejs", { text: text, author: author });
    }
  });
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
