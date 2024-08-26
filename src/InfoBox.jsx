import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    
    const HOT_URL = "https://images.pexels.com/photos/1454752/pexels-photo-1454752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const COLD_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlc3MlMjBpbiUyMGZ1bGwlMjBzbm93fGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity>80
                         ? RAIN_URL 
                         : info.temp > 15 
                         ? HOT_URL 
                         : COLD_URL
                    }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;{
                        info.humidity>80
                         ? <ThunderstormIcon/>
                         : info.temp > 15 
                         ? <WbSunnyIcon/>
                         : <AcUnitIcon/>
                    }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>
                        The weather can be described as <i>{info.weather}</i> and  feels like {info.feelsLike}&deg;C    
                    </p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>

        
    )
}