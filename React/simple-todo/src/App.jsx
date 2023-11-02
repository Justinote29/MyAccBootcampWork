import { useState } from "react";
//import TodoItems from './components/TodoItems'
import "./App.css";

// R read
// C create
// U update now
// 1.user clicks on a item
// 2.click handler - goes in the state and finds the object in todos and changes its inComplete
// D delete not done

// //presentational component
const TodoItem = (props) => {
  const { description } = props;
  return <li>{description}</li>;
};

//container component - it does something
//                    - it may have state
function App() {
  // todo is ref to the state data
  // setTodos is the function to change it

  const [todos, setTodos] = useState([
    // initial set of data
    {
      id: 1,
      description: "Climb Mt. Everest",
      isComplete: false,
    },
    {
      id: 2,
      description: "Dive the Great Barrier Reef",
      inComplete: true,
    },
  ]);

  // store the user input here
  const [newTodo, setNewTodo] = useState("");

  // stores the user input in the state object newTodo
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  // save the user's input into the state todos object
  const handleSubmit = (event) => {
    //stop the form from submitting and refreshing the page(default form behavior)
    event.preventDefault();

    // replace the todos state
    //current spread out todos array,
    //It adds a new object to the existing array of todos.
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

  // creating a new array of TodoItems(li's)
  // const todoItems = todos.map(function({description, id}){
  //   return <TodoItem
  //             key={id}
  //             description={description}></TodoItem>
  // })

  // const todoItems = todos.map(item=>(
  //   <TodoItem
  //     key={item.id}
  //     description={item.description}
  //   />
  // ))

  const handleClick = (item_id) => {
    // steps:
    //1. make a copy of the todos state
    const todosCopyArray = [...todos];
    //2. find the clicked todo in the copy of todos
    const clickedTodoObject = todosCopyArray.find(
      (element) => element.id === item_id
    );
    //3. toggle the isComplete property of the found object
    //clickedTodoObject is the reference to the found obj in the array
    //so when you change clickedTodoObject, you have actually changed it in the todosCopyArray
    clickedTodoObject.isComplete = !clickedTodoObject.isComplete;
    //4. update the state
    setTodos(todosCopyArray);
  };
  //this t_id parameter confuses me, if the id's don't match.
  const handleDelete = (t_id) => {
    //make a copy of state object
    const todosCopyArray = [...todos];
    const filteredArray = todosCopyArray.filter(function (element) {
      return element.id !== t_id;
    });
    //update the state with the copy
    setTodos(filteredArray);
  };

  //make a collection of li's, each representing each todo item
  const todoItems = todos.map((item) => (
    <li
      key={item.id}
      onClick={() => handleClick(item.id)}
      className={item.isComplete ? "completed" : ""}
    >
      {item.description}{" "}
      <button
        className="deleteBtn"
        onClick={(event) => {
          event.stopPropagation();
          handleDelete(item.id);
        }}
      >
        X
      </button>
    </li>
  ));

  return (
    <div className="App">
      <h1>Todo List with React State</h1>
      {/* str 1: read the ref
      str 2: store the user input into state */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="What would you like to do?"
          onChange={handleChange}
          value={newTodo}
        />
        <input type="submit" value="Submit" />
      </form>

      <ol>{todoItems}</ol>
    </div>
  );
}

export default App;
