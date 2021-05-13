import React, { Component } from "react";
import Hero from "./images/SamaFaceHeader.jpg";
import Home from "./components/Home";
import "./App.css";

class App extends Component {
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={Hero} className="App-logo" alt="logo" />
               <h1 className="App-title">Welcome to This shit </h1>
            </header>
            <Home />
         </div>
      );
   }
}

export default App;
