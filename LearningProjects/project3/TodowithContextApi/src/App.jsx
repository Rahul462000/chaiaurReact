import { useEffect, useState } from "react";
import "./App.css";
import { Todoprovider } from "./context/TodoContext";

function App() {
  //the current state is a empty array because we are storing our data in a array form from context
  const [todo, setTodo] = useState([]);

  // method 1
  const addTodo = (todo) => {
    setTodo((prevValue) => [
      {
        id: Date.now(),
        ...todo,
      },
      ...prevValue,
    ]);
  };

  // method 2
  const editTodo = (id, todo) => {
    setTodo((prevValue) =>
      prevValue.map((prev) => (prev.id === id ? todo : prev))
    );
  };
  // mehtod 3
  const deleteTodo = (id) => {
    setTodo((prevValue) =>
      prevValue.filter((userEnteredVAlue) => userEnteredVAlue.id !== id)
    );
  };

  // method 4 this method run when edited value is done and save btn is clicked
  // simple terms it is the save update button
  const toggleComplete = (id) => {
    setTodo((prevValue) =>
      prevValue.map((prevTodoWritten) =>
        prevTodoWritten.id === id
          ? { ...prevTodoWritten, completed: prevTodoWritten.completed }
          : prevTodoWritten
      )
    );
  };
  // now local storage functionality starts from here
  // this local storage will get all previously written todo by user
  // 2.run
  useEffect(() => {
    const localTodo = JSON.parse(localStorage.getItem("writtenText"));
    // here setting the value if it have anything inside of it
    // always ask length
    if (localTodo && localTodo.length > 0) {
      setTodo(localTodo);
    }
  }, []);

  // 1st run
  // here the todo in invertedcomma is key and can be named anything
  // everyvalue are in string we need to convert it into JSON
  // this useEffect will rin for string the new values in the localstoage
  useEffect(() => {
    localStorage.setItem("writtenText", JSON.stringify(todo));
  }, [todo]);

  // ends here
  return (
    <Todoprovider
      value={{ todoproperties, addTodo, editTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

          <div className="w-full max-w-sm mx-auto"></div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
