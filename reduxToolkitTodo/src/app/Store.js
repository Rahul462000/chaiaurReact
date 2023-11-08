// configure the store first

import { configureStore } from "@reduxjs/toolkit";
// now to get the knoledge of the reducer
import todoReducer from "../features/Todo/Todoslice";

// use the upper method and export a variable
// it always a object
export const store = configureStore({
  reducer: todoReducer,
});
