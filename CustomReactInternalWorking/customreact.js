// here we will make our own react environment
// that is how react works internally
// here code will be in js raw format but act as like react working code
function customRender(reactElement, container) {
  /*
  // elemtn is created
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  // set attributes
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  //   adding in the mainContainer that is root element
  container.appendChild(domElement);
  */
  // modular code
  const domElement = document.createElement(reactElement.type);
  //   at 18 line the anchor tag is created and children value is injected into it
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// simulation of html in funtion how does react compile it
// this is how ract works internally or under the hood
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com/",
    target: "_blank",
  },
  children: "Clik me to visit GOOGLE",
};
// grabbing the root id
const mainContainer = document.querySelector("#root");

// method to render the reactELement in the root component

customRender(reactElement, mainContainer);
