import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Confidential from "./components/Confidential/Confidential.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// making router method one
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         // here it is our choice that we want a name in path or not
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//       {
//         path: "Confidential",
//         element: <Confidential />,
//       },
//     ],
//   },
// ]);

// method two for making router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      {/* this is called nested routing */}
      {/* <Route path="singh" element={<secert />} /> */}
      {/* </Route> */}
      <Route path="contact" element={<Contact />} />
      <Route path="confidential/:userid" element={<Confidential />} />
      <Route
        // loader is faster than useEffect
        // it fetches the data from api url before cliking the event
        // by just hovering on it and tehn storing it in cache memory
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
