
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

export default function App() {
    return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <footer>
      This project was created by Christine Wible and is {""}
      <a 
      href="https://github.com/wiblechristine/weather-react"
      target="_blank">
      open-sourced on Github </a>
      </footer>
    </div>
    </div>
);
}