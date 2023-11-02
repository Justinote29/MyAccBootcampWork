import { useState } from "react";
import key from "./config/key";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const performSearch = () => {
    const baseUrl = `https://api.themoviedb.org/3`;
    const route = `/search/movie?api_key=${key.TMDB_KEY}&query=${searchTerm}`;
    const endpoint = baseUrl + route;

    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((searchResults) => {
        console.log(searchResults);
        setMovies(searchResults.results);
        console.log(movies);
        setSearchTerm("");
      })
      .catch((error) => {
        console.log("Error coming from API: ", error);
      });
    // const options = {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     Authorization: ` Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTQxZjVlYjk0Y2MyYTZhZDJkYjA1YWFkNGEwNWRiMiIsInN1YiI6IjY0N2U4ZWQxY2NkZTA0MDBhOGZlMzFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQmbU3MZTZ6yluwWnxOsOsIGZzFTPE-8GID56jxXWgc`,
    //   },
    // };
    // fetch(`https://api.themoviedb.org/3/${searchTerm}/movie_id/images`, options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
  };

  const searchChangeHandler = (event) => {
    console.log("I am the event.target.value", event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <div className="searchBar">
        <input
          type="text"
          id="inputField"
          placeholder="Enter a movie title"
          onChange={searchChangeHandler}
          value={searchTerm}
        />
        <button onClick={() => performSearch(searchTerm)}>Search</button>
      </div>
      {movies.map((movie) => (
        <div key={movie.id} style={{ marginBottom: "5rem" }}>
          <img
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt="poster"
          />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

// import { useState } from "react";
// import key from "./config/key";
// import "./App.css";

// function App() {
//   const [movies, setMovies] = useState([]);

//   const [searchTerm, setSearchTerm] = useState("");

//   const performSearch = () => {
//     const baseUrl = "https://api.themoviedb.org/3";
//     const route = `/search/movie?;api_key=${key.TMDB_KEY}&query=${searchTerm}`;
//     const endpoint = baseUrl + route;

//     fetch(endpoint)
//       .then((response) => {
//         //convert the response to json
//         return response.json();
//       })
//       .then((searchResults) => {
//         //do something with the searchResults, probably use the results to update state.
//         setMovies([searchResults.results]);
//         setSearchTerm("");
//       })
//       .catch((error) => {
//         console.log("Error coming from API:", error);
//       });
//   };

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="App">
//       <h1>Movie Search</h1>
//       <div className="searchBar">
//         <input
//           type="text"
//           id="inputField"
//           placeholder="Enter a movie title"
//           onChange={searchChangeHandler}
//           value={searchTerm}
//         />
//         <button onClick={() => performSearch(searchTerm)}>Search</button>
//       </div>
//       {movies.map((movie) => (
//         <div key={movie.id} style={{ marginBottom: "5rem" }}>
//           <img src={movie.poster_path} alt="poster" />
//           <h2>{movie.title}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
