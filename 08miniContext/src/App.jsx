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
        {/* login will send the data */}
        <Login />
        {/* profile will get the data or fetch the data */}
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
