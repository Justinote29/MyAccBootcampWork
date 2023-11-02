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

const username = "piyush";
// const url = `http://localhost:3000/user/${username}/bucket`;
const url = `https://accbucketlists-3d666dd75daa.herokuapp.com/user/${username}/bucket`;

// Presentational Component example
const TodoItem = (props) => {
  // console.log("props inside TodoItem", props);
  return <li>{props.description}</li>;
};

// container component - it does something, it may have state
function App() {
  /* 
    new rule : App works in a way that is consistent
               i.e. for the same input, we should get same output, every time

               => App must be a "pure function"

               Several things will make App function impure:
               1. If it depends on something that is constantly changing
                  e.g. time => don't depend on the Date for any data
               2. If it depends on any variable outside the App function
               3. If it gets data from outside, e.g. an API or backend
               These are called "Effects"

    HTTP :    Hyper Test Transfer Protocol
    Protocol: a set of instructions or rules by which you send and receive data
    Data:     Strings, images, CSS, HTML, JS, JSON strings, MP3, MP4, GZIP

  */

  // useEffect is a React function where side-effects are allowed to be run
  useEffect(
    function () {
      // make a http request to the server
      fetch(url)
        // convert the response to json
        .then((response) => response.json())
        // take the data and load it on the state
        .then((data) => {
          // console.log("data is:", data);
          setTodos(data);
        })
        // if there's an error, console.log it so that developer can see and fix
        .catch((err) => {
          console.log(err);
        });
    },
    // provide the dependencies for the useEffect
    // empty array : run the useEffect function above once when the App is loaded
    // nothing     : run the useEffect function every time you render
    // [todos]     : run the useEffect function every time todos changes
    []
  );

  // todos is ref to the state data
  // setTodos is the function to change it
  const [todos, setTodos] = useState([
    //   {
    //     id: 1,
    //     description: 'Climb Mt. Everest',
    //     isComplete: false
    //   }, {
    //     id: 2,
    //     description: 'Dive the Great Barrier Reef',
    //     isComplete: true
    //   }
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
    let data = { description: newTodo };
    // let data = { id: Date.now(), description: newTodo, isComplete: false };

    //we don't need to use useEffect here because submitting isn't part of rendering the page.  Rendering needs to be pure.  This gives you a promise.  You can also delete the promise b/c fetch returns a promise and just chain methods onto fetch.
    //tell the backend about the new item

    let promise = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    promise
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setTodos([...todos, data]);
        setNewTodo("");
      })
      .catch(function (err) {
        console.log(err);
      });

    // append the new todo object to the old todos array in the state, move to do this above in promise.
    // setTodos([...todos, data]);

    // empty out the input element
  };

  // will change the completion status of the todo object in the state
  const handleClick = (t_id) => {
    // let the backend know about the update- we need to add the id so the backend knows which item we're making a request on.
    fetch(`${url}/${t_id}`, {
      method: "PUT",
    })
      // .then((response) => response.json())
      .then(() => {
        // console.log('i am in handleClick')
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
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleDelete = (t_id) => {
    fetch(`${url}/${t_id}`, {
      method: "DELETE",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        // one line version
        // setTodos([...todos].filter(t => t.id !== tid))
        // make a copy of the state obj
        const todosCopyArray = [...todos];
        // filter our the matching todo object
        const filteredArray = todosCopyArray.filter(function (element) {
          return element.id !== t_id;
        });
        // update the state with the copy
        setTodos(filteredArray);
        console.log(filteredArray);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  // make a collection of li's each representing each todo item.  We pass handleclick the id of the each element we map over so we can use it in handleClick to find each item.
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
