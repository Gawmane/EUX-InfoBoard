import axios from "axios";
import { useEffect, useState } from "react";
import style from "./WeatherBox.module.scss";
import { TiWeatherPartlySunny } from "react-icons/ti";

export const ShowWeather = () => {
  const [weather, setWeather] = useState([]);

  //  Bruger useffect hook til at render + laver url const og henter get funktion med axios
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?q=Aalborg&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";
      const result = await axios.get(url);
      setWeather(result.data.main.temp);
    };
    getData();
    //Dependency array [] - render 1 gang og cleaner så
  }, [setWeather]);

  // Return en h2 med vores data {weather}
  return (
    <section className={style.weatherWrapper}>
      <p>
        <TiWeatherPartlySunny /> {Math.round(weather)} &deg;C
      </p>
    </section>
  );
};
