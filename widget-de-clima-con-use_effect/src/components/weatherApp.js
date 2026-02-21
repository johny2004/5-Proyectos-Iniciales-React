import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import Loading from "./loading";


import styles from "./weatherApp.module.css";

export default function WeatherApp() {
    const[weather,setWeather] = useState(null);

    useEffect(()=>{
        loadInfo();
    },[]); //hook de efectos secundarios, se ejecuta cada vez que el componente se renderiza, se puede usar para cargar datos de una api, actualizar el DOM, etc.

    
    useEffect(()=>{
        document.title = `weather | ${weather?.location.name ?? ""}`;
    },[weather]); 
    async function loadInfo(city="london"){ //hace la solicitud http a la api, por defecto es london

        try{
            const request = await fetch (`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const json =await request.json();
            setTimeout(() => {
                setWeather(json);
            },2000);
            
            console.log(json);
        }catch (error){
            console.log(error);
        }
    }
    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);

    }

return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
       
        
    </div>
  );


}