import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  // passing an object with props
  let myObj = {
    usename: "singh",
    age: 21,
  };
  // passing an arrray with props
  let newArray = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-3 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {/* props tutorial from here */}
      {/* <Card channel="chai aur code" someObj={newArray} /> */}
      <Card username="chai aur code" btnText="CLick Me" />
      <Card username="Tea with Code" btnText="Visit Me" />
      {/* props ends here */}
    </>
  );
}

export default App;
