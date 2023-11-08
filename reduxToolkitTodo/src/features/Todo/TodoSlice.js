// create a slice or reducer
// and a nanoid it's work to generate a new id
import { createSlice, nanoid } from "@reduxjs/toolkit";

// initalState for store
// it can hanve anything but we take object here
const initialState = {
  // state are here
  //   a object is given here
  todos: [{ id: 1, text: "hello world" }],
};

// now make a slice here slice is a bigger version of reducer
// and slicer is a functionality

// this is a slicer
export const todoSlice = createSlice({
  // here name is a actual proprty in redux toolkit
  name: "todo",
  initialState,
  // now here is the reducer
  // reducer have property and function
  reducers: {
    // property are addTodo and removeTodo with their dunction
    // addTodo hanve two things inside funciton state and action
    //
    // addTodo: (state,action) => {},
    // state give access to inittialState values
    // action
    addTodo: (state, action) => {
      // here we have make action
      //   and it always take a object
      const todo = {
        // to generate a id
        id: nanoid(),
        // a new string from action
        // payload is a object
        text: action.payload,
        // now update  a state
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // only take the unmatched id and left the rest matched id
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
    // updateTodo: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     todo.id === action.payload.id ? action.payload : todo;
    //   });
    // },
  },
});

// exporting the reducers
// export functionality first
export const { addTodo, removeTodo } = todoSlice.actions;

// awareness of the store about the reducers
export default todoSlice.reducer;
