import { useState } from "react";
import Recipe from "./components/Recipe";
import "./RecipeApp.css";

function RecipeApp() {
  return (
    <div className="recipeApp">
      <h1>Recipe App</h1>
      <Recipe
        title="Pasta"
        image="https://i.imgur.com/7aco0Iu.jpeg"
        ingredients={["flour", "water", "eggs", "salt", "sauce"]}
        steps={[
          {
            "Step 1":
              "Combine flour and salt in a medium bowl. Make a well in the center and add beaten egg. Mix well until a stiff dough forms, adding up to 2 tablespoons water if needed.",
          },
          {
            "Step 2":
              "Knead dough on lightly floured surface until smooth, 3 to 4 minutes.",
          },
          {
            "Step 3":
              "Roll dough by hand or with a pasta machine to desired thickness, then cut into strips for desired width and length.",
          },
        ]}
      />
      {/* <Recipe title="Spring Rolls" />
      <Recipe title="Arepas" /> */}
    </div>
  );
}

export default RecipeApp;
