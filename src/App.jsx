// Download selv axios, sass, react, "npm install react-icons --save"

import './App.scss';
import {  NewsFeed } from './Components/Partials/NewsFeed/NewsFeed';
import { ClockFunc } from './Components/Partials/Clock/Clock';
import { Menu } from './Components/Partials/FoodPlan/FoodPlan';

import { ShowWeather } from './Components/Partials/WeatherBox/WeatherBox';
import { Activites } from './Components/Partials/Activities/Activites';

import { BusPlan } from './Components/Partials/BusPlan/BusPlan';


function App() {
  return (
    <div>

      <Activites/>
        <ShowWeather/> 
     
       <NewsFeed/> 
       <Menu /> 
       <ClockFunc /> 

      <BusPlan />

    </div>
  );
}

export default App;
