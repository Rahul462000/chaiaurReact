import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// ui updation is controlled by REACT
function App() {
  // here we can use any nameconvention that we want
  // like
  // let [counter, chaiCounter] = useState(15);
  let [counter, setCounter] = useState(15);

  // let Counter = 15;
  const addValue = () => {
    // updating the counter
    console.log("updating....", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>ADD VAlue {counter}</button>
      <br />
      <button onClick={removeValue}>REMOVE VAlue</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
