//prevents default from behavior on submit

$("form").on("submit", (e) => {
  e.preventDefault();
});

const findMovies = () => {
  //add baseURL and api_key as variable at top.  The "title" will be provided by the user in the input.

  const baseUrl = "https://api.themoviedb.org/3";
  const api_key = "e141f5eb94cc2a6ad2db05aad4a05db2";
  const title = $("#movie").val().trim();
  //endpoint from pattern provided from documentation
  const endpoint = `${baseUrl}/search/movie?api_key=${api_key}&query=${title}`;
  //to examine the data we rebuild the url and add a movie name to get the results we're being sent.  We can then dig into this info to display what we want (in the .then((data)) section.
  //https://api.themoviedb.org/3/search/movie?api_key=e141f5eb94cc2a6ad2db05aad4a05db2&query=avatar

  fetch(endpoint)
    .then((response) => {
      //if we get a true for ok property in response, return our parsed data
      console.log(response);
      if (response.ok) return response.json();
      //if not, throw and error message.  if there is no data, send 'no data', else send 'cannot connect!'
      throw Error(!response.json() ? "No data" : "Cannot connect to server!");
    })
    .then((data) => {
      //do something with our data

      let displayData = "";
      //   capturing results in variable
      let result = data.results[0];
      //iterate through the result (object) to get the movie info to be displayed by the key in the data object
      for (let key in result) {
        displayData += ` ${key} : ${result[key]}<br>`;
      }
      $("#displayMovies").html(displayData);
      $("#movie").val("");
      if (data.results.length < 1) throw Error("No movies match your request");
    })
    .catch((error) => {
      //   what if there is an error?
      $("#displayMovies").html(error.message);
      $("#movie").val("");
    });
};

//grab the button and fire the findMovie function that is above
$("input[type='button']").on("click", findMovies);

//runs findMovie function on for submit
$("form").on("submit", findMovies);
