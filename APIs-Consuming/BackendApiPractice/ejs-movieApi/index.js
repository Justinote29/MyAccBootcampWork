//allows access to env file and parses the variables
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const baseUrl = " https://api.themoviedb.org/3";
const api_key = process.env.TMDB_API_KEY;

//console log environment variables- api key in .env
//console.log(process.env.TMDB_API_KEY);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/results", (req, res) => {
  res.render("results.ejs");
});

//making /nowplaying route.  console.log to see if it's triggered when button is clicked b/c the form action was submitting to /nowplaying route.
app.get("/nowplaying", (req, res) => {
  //pass in api key with
  let route = `/movie/now_playing?language=en-US&page=1&api_key=${api_key}`;

  let endpoint = `${baseUrl}${route}`;
  //  make an http request to movie db
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.render("results.ejs", { data: data.results });
    })
    .catch((err) => {
      console.log("error from now playing fetch: ", err);
    });

  //checking to make sure button is triggered
  //console.log("I have been triggered");
  //b/c of asyncronous nature of js, we can't have res.end( ) here or the cycle will be ended before fetch is complete.
  // res.end();
});

//moviesearch route handler
app.get("/getmovies", (req, res) => {
  console.log(req.query.movies);
  let route = `/search/movie?include_adult=false&language=en-US&page=1&api_key=${api_key}&query=${req.query.titlesearch}`;
  let endpoint = `${baseUrl}${route}`;
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.render("results.ejs", { data: data.results });
    })
    .catch((err) => {
      console.log("error from now playing fetch: ", err);
    });
  //res.end("Getting the Movies!");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
