import { useState } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState(303);

  const clickHandler = () => {
    setDays(days - 1);
  };

  return (
    <div className="App">
      <h1>Birthday Party Count Down App</h1>
      <div className="card">
        <button onClick={clickHandler}>
          Days remaining until Jon's Birthday are : {days}
        </button>
      </div>
    </div>
  );
}

export default App;
