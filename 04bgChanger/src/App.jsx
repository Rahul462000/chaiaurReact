import { useState } from "react";

function App() {
  const [colour, setColour] = useState("#AE445A");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: colour }}
      >
        <h1 className="flex flex-wrap justify-center ">
          Button color Chai🍵 aur code
        </h1>
      </div>
      {/* color bar */}
      <div
        className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            // this is how the state is changed to desired state
            onClick={() => setColour("red")}
          >
            RED
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColour("green")}
          >
            GREEN
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColour("blue")}
          >
            ORANGE
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColour("olive")}
          >
            BLUE
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
            onClick={() => setColour("gray")}
          >
            GRAY
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColour("yellow")}
          >
            YELLOW
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColour("pink")}
          >
            PINK
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColour("purple")}
          >
            PURPLE
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColour("lavender")}
          >
            LAVENDER
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
            onClick={() => setColour("white")}
          >
            WHITE
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColour("black")}
          >
            BLACK
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
