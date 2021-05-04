import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
import App from "./App";

ReactDOM.render(<><Counter /><App /></>, document.getElementById("root"));
registerServiceWorker();
