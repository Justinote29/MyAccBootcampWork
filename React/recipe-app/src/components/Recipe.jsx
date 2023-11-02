import "./Recipe.css";

export default function Recipe(props) {
  let { title, ingredients, image, steps } = props;

  //create a list of the array by mapping over it
  let ingredientsList = ingredients.map(function (ingredient, index) {
    return <li key={index}> {ingredient} </li>;
  });
  //.keys() to get the name out of an object as an array with one item at index 0. and then we make stepValue that accesses the value of each key.
  const stepsList = steps.map((step, index) => {
    let stepName = Object.keys(step)[0];
    let stepValue = step[stepName];
    return (
      <div key={index} className="steps">
        <strong>{stepName}:</strong>
        <br />
        <p key={index}>{stepValue}</p>
      </div>
    );
  });

  return (
    <>
      <div className="card">
        <div className="container">
          <div>
            <h2>Recipe for {title}</h2>
            <h3>Ingredients Needed:</h3>
            <ul>{ingredientsList}</ul>
          </div>
          <div>
            <img className="image" src={image} />
          </div>
        </div>
        <div>{stepsList}</div>
      </div>
    </>
  );
}
