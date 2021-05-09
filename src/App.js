import React from "react";
import WeatherCard from './Components/WeatherCard'
import './App.css';



function App() {

  return (
    <div className="App">
        <WeatherCard
          city="Dordrecht" />
        <WeatherCard
          city="Bali" />
    </div>
  );
}

export default App; 
