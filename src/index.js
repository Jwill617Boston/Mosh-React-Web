import React from "react";
import ReactDOM from "react-dom";
import "./index";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

registerServiceWorker();
