import React, { useState } from 'react';
import axios from 'axios';
import './WeatherApp.css'
import WeatherInfo from './WeatherInfo';

export default function WeatherApp(props) {
    const [weather, setWeather] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);
  function showWeather(response) {
      
    setWeather({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        date: new Date(response.data.dt * 1000),
        city: response.data.name 

    });
  }

  function search() {
    const apiKey = "010a91f8ea00ef6449ae49dee5b2b4ae";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
      event.preventDefault();
      search();
  }

      function changeCity(event) {
          setCity(event.target.value);
      }


  if (weather.ready) {
    return (
    <div className="WeatherApp">

         <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a City Name..." autoFocus="on" className="form-control" onChange={changeCity} />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-light" />
                </div>

            </div>
        </form>

    <WeatherInfo data={weather} />
        
    </div>
    );
  } else {
   search();
    return "Loading...";
  }
}