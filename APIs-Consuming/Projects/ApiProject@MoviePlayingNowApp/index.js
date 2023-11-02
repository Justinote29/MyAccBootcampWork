require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const baseUrl = " https://api.themoviedb.org/3";
const api_key = process.env.TMDB_API_KEY;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

//todo - put api key in .env file having issues getting .env file to work so just put my api key here for now
app.get("/movies", (req, res) => {
  let route = `/movie/now_playing?language=en-US&page=1&api_key=e141f5eb94cc2a6ad2db05aad4a05db2`;
  let endpoint = `${baseUrl}${route}`;
  //  make an http request to movie db
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.render("movies.ejs", { data: data.results });
    })
    .catch((err) => {
      console.log("error from movie fetch: ", err);
    });

  //   res.render("movies.ejs");
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
