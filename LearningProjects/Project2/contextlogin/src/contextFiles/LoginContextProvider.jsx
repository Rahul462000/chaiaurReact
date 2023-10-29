import React, { useState } from "react";
import LoginContext from "./LoginContext";

const LoginContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <>
      <LoginContext.Provider value={{ userProfile, setUserProfile }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};
export default LoginContextProvider;
