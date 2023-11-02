import { useState } from "react";
import "../index.css";

function TheButton(props) {
  const { names } = props;

  const [name, setName] = useState(" ");
  const clickHandler = () => {
    const namesList = [...names];
    let index = Math.floor(Math.random() * namesList.length);

    setName(namesList[index]);
  };

  return (
    <div className="card">
      <button onClick={clickHandler}>Pick a name</button>
      <p className="name">{name}</p>
    </div>
  );
}

export default TheButton;
