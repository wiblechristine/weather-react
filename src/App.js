
import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
    return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer>
      This project was created by Christine Wible and is {""}
      <a 
      href="https://github.com/wiblechristine/weather-react"
      target="_blank"
      rel="noopener noreferrer">
      open-sourced on Github </a>
      </footer>
    </div>
    </div>
);
}