import { createContext, useContext } from "react";

// an object
export const TodoContext = createContext({
  // this array is the representation of working inside of the application
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  //   properties of the todo or functionalities name
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// an custom hook or an method
export const useTodo = () => {
  return useContext(TodoContext);
};

// now provider
export const TodoProvider = TodoContext.Provider;
