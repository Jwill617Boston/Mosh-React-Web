import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1 className="App-title">Welcome to This shit </h1>
            </header>
            <p className="App-intro">
               I just wanted to play around with the words{" "}
               <code>Link to No Where</code> and save to reload.
            </p>
         </div>
      );
   }
}

export default App;
