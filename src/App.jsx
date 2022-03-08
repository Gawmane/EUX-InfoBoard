// Download selv axios, sass, react

import './App.scss';
import {  NewsFeed } from './Components/Partials/NewsFeed/NewsFeed';
import { ClockFunc } from './Components/Partials/Clock/Clock';

function App() {
  return (
    <div>
      <h1>hej igen</h1>
      <NewsFeed/>
      <ClockFunc />
    </div>
  );
}

export default App;
