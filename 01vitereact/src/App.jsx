import React from "react";
import Chai from "./chai";

function App() {
  // injecting variables process
  const username = "chai aur code";

  return (
    <>
      <Chai />
      {/* here in {} the variable name is injected */}
      {/* inside {} called evaluated expression it is the final outcome of javascript */}
      <h1>chai aur react with vite | {username}</h1>
      <p>test a para</p>
    </>
  );
}

export default App;
