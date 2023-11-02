const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//import dealCards function
const { dealCards, cardSort, valueConverter } = require("./helpers.js");

app.get("/", (req, res) => {
  res.redirect("/home");
});

const baseUrl = "https://www.deckofcardsapi.com/api/deck";

//next is middleware, which happens after the request but before we send the response, next is one middleware already in express.
app.get("/home", (req, res, next) => {
  //we want to get one deck from the api
  let route = "/new/shuffle/?deck_count=1";
  let endpoint = `${baseUrl}${route}`;
  fetch(endpoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      //if there is an issue, then we throw this custom error message, which is caught in the .catch();
      else {
        throw Error("Justin broke it!!!!");
      }
    })
    //we can add to our REQ object
    .then((data) => {
      //we want the deck_id
      let deckId = data.deck_id;
      req.deckId = deckId;
      next();
    })
    .catch((err) => {
      console.log("Error from API: ", err);
      res.render("error.ejs");
    });
});

app.get("/home", (req, res) => {
  let route = `${req.deckId}/draw/?count=10`;
  let endpoint = `${baseUrl}/${route}`;
  //basically we do the same then in first .then and .catch;
  fetch(endpoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      //if there is an issue, then we throw this custom error message, which is caught in the .catch();
      else {
        throw Error("Justin broke it!!!!");
      }
    })
    .then((cardData) => {
      //converts values into numbers for all 10 cards
      let convertedCards = valueConverter(cardData.cards);
      //declare and set hands variable to the array with the 2 hand arrays from dealCards function with the convertedCards (facecards give numerical values).  We change hands to use array destructuring to pull out the two returned arrays into variables
      let [player, computer] = dealCards(convertedCards);

      res.render("home.ejs", {
        playerHand: cardSort(player),
        computerHand: cardSort(computer),
      });
    })
    .catch((err) => {
      console.log("Error from API: ", err);
      res.render("error.ejs");
    });
});

app.get("*", (req, res) => {
  res.render("error.ejs");
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
