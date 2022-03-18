// Download selv axios, sass, react, "npm install react-icons --save"

import style from "./App.module.scss";
import { NewsFeed } from "./Components/Partials/NewsFeed/NewsFeed";
import { ClockFunc } from "./Components/Partials/Clock/Clock";
import { Menu } from "./Components/Partials/FoodPlan/FoodPlan";
import { ShowWeather } from "./Components/Partials/WeatherBox/WeatherBox";
import { Activites } from "./Components/Partials/Activities/Activites";
import { BusPlan } from "./Components/Partials/BusPlan/BusPlan";
import Logo from "../src/Assets/Images/EUX-logo.png";
import {  PostIt } from "./Components/Partials/Message/Message";

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <section className={style.leftside}>
          <img src={Logo} alt="Logo" className={style.logo} />
          <ClockFunc />
          <ShowWeather />
          <Menu />
          <BusPlan />
          <PostIt/>
        </section>

        <section className={style.aktiviteter}>
          <Activites />
        </section>
      </div>
      <NewsFeed />
    </>
  );
}

export default App;
