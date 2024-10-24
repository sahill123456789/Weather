import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Weather.css';

const WeatherGet = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("New York");

    const getWeather = async () => {
        try {
            const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=82c82f3b5d794528a5d81326242210&q=delhi&aqi=no');
            setWeather(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        getWeather();
    }, [city]);

    return (
        <div className="weather-main">
            
            <div>
                <h1>Weather in {weather?.location?.name}</h1>
                <p>Temperature: {weather?.current?.temp_c} °C</p>
                <p>Condition: {weather?.current?.condition?.text}</p>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
                />
                <button onClick={getWeather}>Search</button>
            </div>

            
        </div>
    );
};

export default WeatherGet;