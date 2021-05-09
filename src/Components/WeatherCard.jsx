import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherDetail from './WeatherDetail';

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState({});
  const [weatherIcon, setWeatherIcon] = useState({});
  const [toggleDetails, setToggleDetails] = useState(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const toggle = () => {
    setToggleDetails(!toggleDetails);
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=nl&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    })
      .then((response) => {
        console.log(response.data);
        setWeather(response.data.main);
        setWeatherIcon(response.data.weather[0]);
        setLat(response.data.coord.lat);
        setLon(response.data.coord.lon);


      })
      .catch((error) => console.log(error));
  }, [city]);


  return (
    <div className="container">
      <div className="cards">
      <h1 className="temp">{Math.floor(weather.temp)}&deg;</h1>
        <div>
          <h1 className="city">
            {city}
          </h1>
        </div>
        <h5 className="icons">
          <img src={`http://openweathermap.org/img/wn/${weatherIcon.icon}@2x.png`} alt="" />
        </h5>
        < div className="minmaxhumidity">
        {minmaxhumidityTemp(Math.floor(weather.temp_min), Math.floor(weather.temp_max), (weather.humidity))}
        </ div>
        {/* <h4>Vochtigheid</h4>
        <h4 className="humidity">{(weather.humidity)}%</h4>
         */}
        <button onClick={toggle}>weather forecast</button>
        <div className='toggle'>
          {toggleDetails ? <WeatherDetail lat={lat} lon={lon} city={city}  /> : null}
        </div>
      </div>
    </div>
  );
};

function minmaxhumidityTemp(min, max, humidity) {
  return (
    <h3 className="minmax">
      <span>Min:{min}&deg;</span>&emsp;
      <span>Max:{max}&deg;</span>&emsp;
      <span>Humidity:{humidity}%</span>
    </h3>
  );

};


export default WeatherCard;