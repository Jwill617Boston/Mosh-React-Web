import React from "react";
import ReactDOM from "react-dom";
import "./index";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Home from "./components/Home";

ReactDOM.render(<Home></Home>, document.getElementById("root"));

registerServiceWorker();
