import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// 1.
function MyApp() {
  return (
    <div>
      <h1>Custom APPlication</h1>
    </div>
  );
}
// 2.
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com/",
//     target: "_blank",
//   },
//   children: "Clik me to visit GOOGLE",
// };
// 3.
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "chai aur Tea";

//4. it is the correct way of 2
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit GOOGLE",
  // this is how a variable is added
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />,
  // it is also considered as a object but it's syntax is not right
  // ReactElement
  // it is being considered a object and its code syntax is right
  // anotherElement
  // it it the correct method with syntax
  reactElement
  // <MyApp />
);
