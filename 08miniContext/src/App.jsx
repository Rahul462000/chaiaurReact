import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>REact with chai</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
