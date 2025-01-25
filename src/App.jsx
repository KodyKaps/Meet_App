// src/App.jsx
import React from 'react';
import './App.css'

import EventList from './components/eventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
const App = () => {
  return (
    <div className="App">
      <CitySearch/>
      <NumberOfEvents/>
      <EventList />
    </div>
  );
}


export default App;