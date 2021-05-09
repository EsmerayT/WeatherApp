import React, { useEffect, useState } from "react";
import axios from "axios";
import Collapsible from 'react-collapsible';


const WeatherDetail = ({ lat, lon, city }) => {
    const [date, setDate] = useState([]);
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&lang=nl&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        })
            .then((response) => {
                console.log(response);
                setDate(response.data.daily);
            })
            .catch((error) => console.log(error));
    }, [lat, lon, city]);
    console.log(date);


    return (

        <div className='weatherdetails'>
            {/* <h1 className="city">{city} details</h1> */}

            {date &&
                date.map((datum, index) => {
                    const d = new Date(datum.dt * 1000);
                    const n = d.toLocaleDateString();
                    console.log(d, n);

                    return (

                        <Collapsible trigger={<div className="datum"> {n} <img
                            src={`http://openweathermap.org/img/wn/${datum.weather[0].icon}.png`} alt='icon' ></img>
                            {Math.floor(datum.temp.min)}/{Math.floor(datum.temp.max)}&deg;C</div>}
                        >
                            <div className='table'>
                                <table>
                                    <tr>
                                        <td></td>
                                        <td>Morning</td>
                                        <td>Afternoon</td>
                                        <td>Evening</td>
                                        <td>Night</td>
                                    </tr>
                                    <tr>
                                        <td>Temperature</td>

                                        <td>{Math.floor(datum.temp.morn)}&deg;C</td>
                                        <td>{Math.floor(datum.temp.day)}&deg;C</td>
                                        <td>{Math.floor(datum.temp.eve)}&deg;C</td>
                                        <td>{Math.floor(datum.temp.night)}&deg;C</td>
                                    </tr>
                                </table>
                            </div>
                        </Collapsible>

                    );
                })}
        </div >
    )
}

export default WeatherDetail;
