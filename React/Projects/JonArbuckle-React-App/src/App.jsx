import { useState } from "react";
import "./App.css";
import AboutJon from "./AboutJon";
import GarfieldFood from "./GarfieldFood";
import GarfieldHate from "./GarfieldHateList";

function App() {
  const GarfieldFoodList = [
    "Pepperoni Pizza",
    "Spaghetti with meatballs",
    "Jumbo shrimp",
    "Lobster with filet mignon",
  ];

  const GarfieldHateList = [
    "Mondays",
    "Spiders",
    "Raisins",
    "Jon singing in the shower",
  ];

  return (
    <>
      <h1>About Jon Arbuckle</h1>
      <AboutJon />
      <h2>Garfield's favorite foods</h2>
      <ul>
        <GarfieldFood food={GarfieldFoodList[0]} />
        <GarfieldFood food={GarfieldFoodList[1]} />
        <GarfieldFood food={GarfieldFoodList[2]} />
        <GarfieldFood food={GarfieldFoodList[3]} />
      </ul>
      <hr />
      <h2>Things Garfield hates</h2>
      <ol>
        <GarfieldHate hate={GarfieldHateList[0]} />
        <GarfieldHate hate={GarfieldHateList[1]} />
        <GarfieldHate hate={GarfieldHateList[2]} />
        <GarfieldHate hate={GarfieldHateList[3]} />
      </ol>
    </>
  );
}

export default App;
