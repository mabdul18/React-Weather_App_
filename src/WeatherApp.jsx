import { useState } from 'react';

import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike : 38.05,
        humidity : 79,
        temp: 31.05,
        tempMax: 31.05,
        tempMin: 31.05,
        weather: "mist"
    });

    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}