// Download selv axios, sass, react

import './App.scss';
import {  NewsFeed } from './Components/Partials/NewsFeed/NewsFeed';
import { ClockFunc } from './Components/Partials/Clock/Clock';
import { Menu } from './Components/Partials/FoodPlan/FoodPlan';
import { ShowWeather } from './Components/Partials/WeatherBox/WeatherBox';
import { Activites } from './Components/Partials/Activities/Activites';

function App() {
  return (
    <div>
      <Activites/>
        <ShowWeather/> 
     
       <NewsFeed/> 
       <Menu /> 
       <ClockFunc /> 
     
    </div>
  );
}

export default App;
