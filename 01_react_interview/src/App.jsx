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
    // counter = counter + 1;
    // setCounter(counter + 1);
    // if setCounter(counter+1) is written like given below
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // to tabh bhi ek bar mein mein +1 he hoga origianl value mein
    // or ek better aapproach hai
    // here after callback is finished the end value is being printed
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    console.log("updating....", counter);
  };
  const removeValue = () => {
    setCounter(counter - 1);
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
