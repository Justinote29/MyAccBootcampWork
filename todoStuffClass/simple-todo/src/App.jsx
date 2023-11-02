import { useState, useEffect } from "react";
// import TodoItems from './components/TodoItems'
import "./App.css";

/*
  CRUD::
  R - Read    DONE
  C - Create  DONE
  U - Update  - making the isComplete to be true
    1. user clicks on a item (li)
    2. click handler - goes in the state and finds the object in todos and changes its isComplete

  D - Delete
*/

// Presentational Component example
const TodoItem = (props) => {
  console.log("props inside TodoItem", props);
  return <li>{props.description}</li>;
};

// container component - it does something, it may have state
function App() {
  useEffect(function () {
    fetch("http://localhost:3000/user/piyush/bucket")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // todos is ref to the state data
  // setTodos is the function to change it
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   description: "Climb Mt. Everest",
    //   isComplete: false,
    // },
    // {
    //   id: 2,
    //   description: "Dive the Great Barrier Reef",
    //   isComplete: false,
    // },
  ]);

  // store the user input here
  const [newTodo, setNewTodo] = useState("");

  // stores the user input in the state object newTodo
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  // save the user's input into the state todos object
  const handleSubmit = (event) => {
    // stop the form from submitting and refreshing the page (default form behavior)
    event.preventDefault();

    // append the new todo object to the old todos array in the state
    setTodos([
      ...todos,
      {
        id: Date.now(),
        description: newTodo,
        isComplete: false,
      },
    ]);

    // empty out the input element
    setNewTodo("");
  };

  // will change the completion status of the todo object in the state
  const handleClick = (t_id) => {
    console.log("i am in handleClick");
    // Steps:
    // 1. make a copy of the todos state
    const todosCopyArray = [...todos];
    // 2. find the clicked todo in the copy of todos
    // const clickedTodoObject = todosCopyArray.find(element => element.id === t_id)
    const clickedTodoObject = todosCopyArray.find(function (element) {
      return element.id === t_id;
    });
    // 3. toggle the isComplete property of the found object ref
    clickedTodoObject.isComplete = !clickedTodoObject.isComplete;
    // 4. update the state
    setTodos(todosCopyArray);
  };

  const handleDelete = (tid) => {
    // one line version
    // setTodos([...todos].filter(t => t.id !== tid))
    console.log("i am in handleDelete");
    // make a copy of the state obj
    const todosCopyArray = [...todos];
    // filter our the matching todo object.  only the elements that don't match the id we click on get returned and show up.
    const filteredArray = todosCopyArray.filter(function (element) {
      return element.id !== tid;
    });
    // update the state with the copy
    setTodos(filteredArray);
  };

  // make a collection of li's each representing each todo item
  const todoItems = todos.map((t) => (
    <li
      key={t.id}
      onClick={() => handleClick(t.id)}
      className={t.isComplete ? "completed" : ""}
    >
      {t.description}
      <button
        className="deleteBtn"
        onClick={(event) => {
          // don't pass on the click event, you handle it
          event.stopPropagation();
          handleDelete(t.id);
        }}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className="App">
      <h2>Simple Todo with React State</h2>
      {/* strategy 1: read the ref */}
      {/* strategy 2: store the user input into state */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="What would you like to do?"
          onChange={handleChange}
          value={newTodo}
        />
      </form>

      <ol>
        {/* i want to include the collection of TodoItems (li's) here */}
        {todoItems}
      </ol>
    </div>
  );
}

export default App;
