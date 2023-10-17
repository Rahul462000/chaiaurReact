import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// ui updation is controlled by REACT
function App() {
  // here we can use any nameconvention that we want
  // like
  // let [counter, chaiCounter] = useState(15);
  let [counter, setCounter] = useState(0);

  // let Counter = 15;
  const addValue = () => {
    // updating the counter
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("counter limit cannot be more than 20");
    }
    console.log("updating....", counter);
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("counter valur cannot be below 0");
    }
  };
  const resetValue = () => {
    setCounter("");
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>ADD VAlue :{counter}</button>
      <hr />
      <button onClick={removeValue}>REMOVE VAlue :{counter} </button>
      <hr />
      <button onClick={resetValue}>footer:{counter}</button>
    </>
  );
}

export default App;
