import { useState, useEffect } from "react";
import Table from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  //added the first .then() to change the response to json.  I also updated the fetch endpoint to access the data for people based on the api documentation.
  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPersons(data.results);
        console.log(data);
      })
      .catch((error) => console.log("Error loading ", persons, error));
  }, []);

  return <Table persons={persons} />;
};

export default App;
