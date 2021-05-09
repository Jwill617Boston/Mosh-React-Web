import React from "react";
import ReactDOM from "react-dom";
import "./index";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import Movies from "./components/Movies";

ReactDOM.render(
  <>
    <Movies />
    <App />
  </>,
  document.getElementById("root")
);

registerServiceWorker();
