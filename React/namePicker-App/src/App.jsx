import { useState } from "react";
import TheButton from "./components/Button";
import "./App.css";

const names = [
  "Justin",
  "Shui",
  "Jing",
  "Tom",
  "Noah",
  "Elizabeth",
  "Amit",
  "Matthew B.",
  "Colton",
  "Belinda",
  "Stephen",
  "Matthew R.",
];

function App() {
  return (
    <>
      <h1>Name Picker</h1>
      <div>
        <TheButton names={names} />
      </div>
    </>
  );
}

export default App;
