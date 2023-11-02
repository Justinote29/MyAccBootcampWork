const needle = require("needle");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/quote", (req, res) => {
  let currency = req.query;

  let endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";
  fetch(endpoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Something went wrong!");
      }
    })
    .then((data) => {
      //destructuring the query to set currency to the query param.  Then setting variables for the data that is returned from the API call for the three currencies.  I send this to the quote.ejs ap.
      let { currency } = req.query;
      let USD = data.bpi.USD;
      let EUR = data.bpi.EUR;
      let GBP = data.bpi.GBP;
      console.log(currency);
      res.render("quote.ejs", { USD, EUR, GBP, currency });
    })
    .catch((err) => {
      console.log("Error from API: ", err);
    });
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

//Need to make api call to endpoint=
//https://api.coindesk.com/v1/bpi/currentprice.json
// Then need to dig down in object to data.bpi.  This gives us three options, USD, GBP and EUR, based on radio button option, we display a bitcoin price in that currency
