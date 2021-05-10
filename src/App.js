import React from "react";
import WeatherCard from './Components/WeatherCard'
import './App.css';



function App() {

  return (
    <div className="App">
        <WeatherCard
          city="Istanbul" />
    </div>
  );
}

export default App; 
