//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//React < 18
//render your react application
//ReactDOM.render(<Layout />, document.querySelector("#app"));

//React 18
//render your react application
const container = document.querySelector("#app");
const root = ReactDOM.createRoot(container);
root.render(<Layout />);
