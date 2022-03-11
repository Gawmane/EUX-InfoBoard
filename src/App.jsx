// Download selv axios, sass, react, "npm install react-icons --save"

import './App.scss';
import {  NewsFeed } from './Components/Partials/NewsFeed/NewsFeed';
import { ClockFunc } from './Components/Partials/Clock/Clock';
import { Menu } from './Components/Partials/FoodPlan/FoodPlan';
import { BusPlan } from './Components/Partials/BusPlan/BusPlan';

function App() {
  return (
    <div>
      <h1>hej igen</h1>
      <NewsFeed/>
      <Menu />
      <ClockFunc />
      <BusPlan />
    </div>
  );
}

export default App;
