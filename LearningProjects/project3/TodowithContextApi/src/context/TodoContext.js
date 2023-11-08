import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // some common properties of the project
  todoproperties: [
    {
      id: 1,
      todo: "Todo Message",
      complete: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// this is a custom hook where we are pasingh the context
export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;
