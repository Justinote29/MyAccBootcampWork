import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //state for trending gifs and search term
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const baseUrl = "https://api.giphy.com/v1/gifs";

  //to capture what's entered in search
  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  //handler for search for gifs
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const api_Key = "o4FCBp9DrVqTrwQ7vdw9U05n6Ge6194q";
    const endpoint = `${baseUrl}/search?api_key=${api_Key}&q=${searchTerm}&limit=25`;
    fetch(endpoint)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Bad network response");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGifs(data.data);
        setSearchTerm("");
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  //handler for trending gifs, useEffect lets it wait until page is loaded to run
  useEffect(() => {
    const api_Key = "o4FCBp9DrVqTrwQ7vdw9U05n6Ge6194q";
    const endpoint = `${baseUrl}/trending?api_key=${api_Key}&limit=25`;
    fetch(endpoint)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Bad network response");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGifs(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <>
      <h1>Giphy Searcher</h1>
      <form action="/" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={onChangeHandler}
        />
        <button type="submit">Search for Gifs</button>
      </form>

      <div className="gifDiv">
        {gifs.map((gif) => (
          <img src={gif.images.original.url} key={gif.id} alt="" />
        ))}
      </div>
    </>
  );
}

export default App;
