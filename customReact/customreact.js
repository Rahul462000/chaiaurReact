function customRender(reactElement, constainer) {
  // element is created
  // old code
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  constainer.appendChild(domElement);
  // modular code
  // const domElement = document.createElement(reactElement.type)domElement.innerHTML = reactElement.children
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "CLick me to visit Google",
};
const mainContainer = document.querySelector("#root");

// method rendering a tag in root

customRender(reactElement, mainContainer);
