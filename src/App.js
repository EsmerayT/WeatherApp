import React from "react";
import WeatherCard from './Components/WeatherCard'
import './App.css';



function App() {

  return (
    <div className="App">
        <WeatherCard
          city="Amsterdam" />
    </div>
  );
}

export default App; 
