import { createContext, useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import LoginContextProvider from "./contextFiles/LoginContextProvider";

function App() {
  return (
    <>
      <LoginContextProvider>
        {/* login page */}
        <Login />
        {/* profile page */}
        <Profile />
      </LoginContextProvider>
    </>
  );
}

export default App;
