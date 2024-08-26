import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    // actual url : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 

    let getWeatherInfo = async() =>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err){
            throw err
        }
    };
    
    let handleChange = (event)=>{
        setCity(event.target.value);
    };
    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        error ? setError(false) : null;
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
           setError(true);
        }
    };
    
    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField 
                id="city" 
                label="City name"
                variant="outlined" 
                value={city} 
                required 
                onChange={handleChange}
            />
            <br />
            <br />
            <Button variant="contained" type="submit">
                SEARCH
            </Button>
            {error && <p style={{color:"red"}}>No such place exist!</p>}
            </form>
        </div>
    )
}