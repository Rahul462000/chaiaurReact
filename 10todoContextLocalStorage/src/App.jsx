import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  // adding functionalities
  const addTodo = (todo) => {
    // adding todo to useState array
    // here the old values are added with new values
    setTodos((previousVAlues) => [
      { id: Date.now(), ...todo },
      ...previousVAlues,
    ]);
  };

  // update todos
  const updateTodo = (id, todo) => {
    // need to run an loop and find out on which id loop shpuld be run
    // prevTodo is from all array
    // and id is for updateTodo
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // deleting the todo list
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // 38.31 timeline
  // toggle switch
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // for localstorage purposes
  // this localstorage will work when application is loaded and all previous data will be shown
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem());
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  return (
    // here the properties are added

    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
