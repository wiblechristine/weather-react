import React, {useEffect, useState} from "react";
import "./WeatherForecast.css";
import Axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
    
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
        let apiKey = "e9c65b5b23523086d1fb97fd91ac0263";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweather.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
        Axios.get(apiUrl).then(handleResponse);
    }
    
if (loaded) {
    return (
        <div className="WeatherForecast">
         <div className="row">
            {forecast.map(function (dailyForecast, index) {
             if (index < 5) {
             return (
             <div className="col" key={index}>
             <WeatherForecastDay data={dailyForecast} />
            </div>
        );
     } else {
        return null;
     }         
    })}
    </div>
    </div>
    );

} else {
    load();
 

    return null;

}}