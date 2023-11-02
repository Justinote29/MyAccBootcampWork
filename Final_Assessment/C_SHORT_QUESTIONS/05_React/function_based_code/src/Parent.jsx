import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [name, setName] = useState("");
  //we pass the handleChange function to the child component as props so we need to build it.  We accept the event as a parameter and set the variable value to value of the target key in the event object.  We use this to set the name in state with the setName function from above.
  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div>
      <h1>Hello {name}</h1>
      <Child name={name} handleChange={handleChange} />
    </div>
  );
}

export default Parent;
